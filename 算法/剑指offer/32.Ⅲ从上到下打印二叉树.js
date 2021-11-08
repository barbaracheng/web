/*
 * @Author: leyuans
 * @Date: 2021-11-08 09:44:05
 * @LastEditTime: 2021-11-08 09:59:00
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\32.Ⅲ从上到下打印二叉树.js
 */
/**
 * 请实现一个函数按照之字形顺序打印二叉树，
 * 即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，
 * 第三行再按照从左到右的顺序打印，其他行以此类推。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    const res = [], queue = [root];
    let flag = 1; // 翻转标志
    while (queue.length) {
        let temp = [], len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (flag === 1) {
                temp.push(node.val);
            } else {
                // unshift()表示从队首添加元素
                temp.unshift(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        // 翻转
        flag = -flag;
        res.push(temp);
    }
    return res;
};



/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    const res = [], queue = [root];
    let flag = 1;
    while (queue.length) {
        let temp = [], len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            temp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        // 判断翻转标志：为1表示从左至右添加；-1表示从右至左添加，需要将temp的值翻转
        if (flag === -1) {
            res.push(temp.reverse());
        } else {
            res.push(temp);
        }
        flag = -flag;
    }
    return res;
};
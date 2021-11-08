/*
 * @Author: leyuans
 * @Date: 2021-11-08 09:14:33
 * @LastEditTime: 2021-11-08 09:20:34
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\32.Ⅰ从上到下打印二叉树.js
 */
// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 借助队列来实现二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const queue = [root];
    while (queue.length) {
        let root = queue.shift();
        res.push(root.val);
        if (root.left) {
            queue.push(root.left);
        }
        if (root.right) {
            queue.push(root.right);
        }
    }
    return res;
};
/*
 * @Author: leyuans
 * @Date: 2021-11-08 09:23:01
 * @LastEditTime: 2021-11-08 09:42:45
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\32.Ⅱ从上到下打印二叉树.js
 */
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 算法流程：
 * 1.特殊情况：当root为空时直接返回空数组
 * 2.初始化：结果数组res=[]，将根节点添加进队列queue = [root]
 * 3.BFS循环：当队列为空时跳出
 *     1.新建一个临时列表用于存储本层的节点
 *     2.当前层的打印循环：循环次数为当前层的节点个数（即当前队列的长度）
 *         1.出队：队首元素出队，记为node
 *         2.打印：将node.val添加至temp的尾部
 *         3.入队：将node的左右节点（不为空）入队
 *     3.将当前层的打印结果添加至res
 * 4.返回值：返回结果数组res即可
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const queue = [root];
    while (queue.length) {
        let len = queue.length;
        let temp = [];
        for (let i = 0; i < len; i++) {
            let root = queue.shift();
            temp.push(root.val);
            if (root.left) {
                queue.push(root.left);
            }
            if (root.right) {
                queue.push(root.right);
            }
        }
        res.push(temp);
    }
    return res;
};
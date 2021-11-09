/*
 * @Author: leyuans
 * @Date: 2021-11-09 09:36:04
 * @LastEditTime: 2021-11-09 09:39:19
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\27.二叉树的镜像.js
 */
/**
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 * 例如输入：
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (root === null) {
        return null;
    }
    const left = mirrorTree(root.left);
    const right = mirrorTree(root.right);
    // 交换节点的左右孩子
    root.left = right;
    root.right = left;
    // 返回当前节点
    return root;
};
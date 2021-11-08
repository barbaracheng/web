/*
 * @Author: leyuans
 * @Date: 2021-10-29 13:40:24
 * @LastEditTime: 2021-10-29 13:43:35
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\38.路径总和.js
 */
/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，
 * 判断该树中是否存在 根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 叶子节点 是指没有子节点的节点。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // 当前节点为空，说明已经搜索完这一条路径了
    if (root === null) {
        return false;
    }
    // 当遍历到叶子节点的时候，判断当前剩余的目标和与当前节点的值是否一致
    if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
/*
 * @Author: leyuans
 * @Date: 2021-09-30 14:20:14
 * @LastEditTime: 2021-09-30 15:11:15
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\11.路径总和.js
 */
/**给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
叶子节点 是指没有子节点的节点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
/**
 * 1.递归方法（深度优先遍历）
 * 时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。
 * 空间复杂度：O(H)，其中 H 是树的高度。
 * 空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 O(N)。
 * 平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(logN)。
 */
var hasPathSum = function (root, targetSum) {
    function dfs(root, targetSum) {
        // 到达空结点
        if (!root) {
            return false;
        }
        // 判断是否到达叶子结点
        if (!root.left && !root.right) {
            return targetSum === root.val;
        }
        return dfs(root.left, targetSum - root.val) || dfs(root.right, targetSum - root.val);
    }
    return dfs(root, targetSum);
};

/**
 * 如果要记录符合条件的路径，可以用一个数组来保存结果
 */
var hasPathSum = function (root, targetSum) {
    // res保存所有符合条件的路径，也就是最终结果，stack保存每次遍历中符合条件的路径 
    const res = [], stack = [];
    function dfs(root, targetSum) {
        // 到达空结点
        if (!root) {
            return false;
        }
        // 将结点值入栈
        stack.push(root.val);
        // 判断是否到达叶子结点
        if (!root.left && !root.right) {
            if (targetSum !== root.val) {
                // 此时该路径不满足条件，出栈
                stack.pop();
            } else {
                // 符合条件的路径加入最终结果
                res.push(stack);
            }
            return targetSum === root.val;
        }
        return dfs(root.left, targetSum - root.val) || dfs(root.right, targetSum - root.val);
    }
    let ans = dfs(root, targetSum);
    console.log(res);
    return ans;
};


/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
/**  
 * 2.广度优先遍历
 */
var hasPathSum = function (root, targetSum) {
    const sum = [], nodes = [];
    if (!root) return false;
    nodes.push(root);
    sum.push(root.val);
    while (nodes.length) {
        let node = nodes.pop(), curSum = sum.pop();
        if (!node.left && !node.right) {
            if (curSum === targetSum) {
                return true;
            }
            continue;
        }
        if (node.left) {
            sum.push(curSum + node.left.val);
            nodes.push(node.left);
        }
        if (node.right) {
            sum.push(curSum + node.right.val);
            nodes.push(node.right);
        }
    }
    return false;
};
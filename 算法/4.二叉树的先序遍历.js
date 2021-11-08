/*
 * @Author: leyuans
 * @Date: 2021-09-28 11:59:11
 * @LastEditTime: 2021-09-29 09:48:22
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\4.二叉树的先序遍历.js
 */
/**
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 */
/**
 * Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * 1.
 */
var preorderTraversal = function (root) {
    const res = [];
    const preorder = (root) => {
        if (!root) {
            return;
        }
        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return res;
};


/**
 * 2.
 */
var preorderTraversal = function (root) {
    const res = [];
    if (!root) {
        return res;
    }
    const stack = [];
    while (stack.length || root) {
        // 当前结点不为空，执行以下操作：
        /**
         * 1.将当前结点的值加入结果数组
         * 2.将当前节点入栈
         * 3.将当前节点的左子节点赋值给当前节点
         * 当循环退出时，root的值为空，当前已经走到二叉树的最左端的左节点
         */
        while (root) {
            res.push(root.val);
            stack.push(root);
            root = root.left;
        }
        /**
         * 1.栈顶元素出栈
         * 2.将出栈元素的右子节点赋值给root
         *  */
        root = stack.pop();
        root = root.right;
    }
    return res;
};
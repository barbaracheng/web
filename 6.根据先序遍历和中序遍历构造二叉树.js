/*
 * @Author: leyuans
 * @Date: 2021-09-29 11:04:37
 * @LastEditTime: 2021-10-29 13:19:29
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\6.根据先序遍历和中序遍历构造二叉树.js
 */
/**
 * 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
 */
/**
 * Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = new Map();
    inorder.forEach((v, i) => map.set(v, i));
    const myBuildTree = function (preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {
        // 递归终止条件
        if (preorder_left > preorder_right) {
            return null;
        }
        // 先序遍历的第一个节点为根节点
        let root = new TreeNode(preorder[preorder_left]);
        // 找到中序遍历中根节点的位置
        let inorder_root = map.get(preorder[preorder_left]);
        // 计算左子树的结点数目
        let size_left_subtree = inorder_root - inorder_left;
        // 递归创建左子树
        root.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1);
        // 递归创建右子树
        root.right = myBuildTree(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right);
        return root;
    }
    let n = preorder.length;
    // 调用myBuildTree方法
    return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
}

// 递归
function reConstructBinaryTree(pre, vin) {
    if (pre.length === 0 || vin.length === 0) {
        return null;
    }
    // 创建根节点
    let root = new TreeNode(pre[0]);
    // 在中序中找到前序的根
    for (let i = 0; i < vin.length; i++) {
        if (vin[i] === pre[0]) {
            // 左子树
            root.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
            // 右子树
            root.right = reConstructBinaryTree(pre.slice(i + 1, pre.length), vin.slice(i + 1, vin.length));
            break;
        }
    }
    return root;
}
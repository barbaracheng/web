/*
 * @Author: leyuans
 * @Date: 2021-09-28 12:01:40
 * @LastEditTime: 2021-10-29 13:15:37
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\5.二叉树的后序遍历.js
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
 * 1.递归实现
 * 
 */
var postorderTraversal = function (root) {
    const res = [];
    const postorder = (root) => {
        if (!root) {
            return;
        }
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);
    }
    postorder(root);
    return res;
};

/**
 * 2.非递归实现（迭代）
 */
function postorderTraversal(root) {
    const res = [];
    if (!root) {
        return res;
    }
    const stack = [];
    let prev = null;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.right == null || root.right == prev) {
            res.push(root.val);
            prev = root;
            root = null;
        } else {
            stack.push(root);
            root = root.right;
        }
    }
    return res;
}

/**
 * 3.Morris遍历
 */
function postorderTraversal(root) {
    const res = [];
    if (!root) {
        return res;
    }
    let p1 = root, p2 = null;
    while (p1 != null) {
        p2 = p1.left;
        if (p2 != null) {
            while (p2.right != null && p2.right != p1) {
                p2 = p2.right;
            }
            if (p2.right == null) {
                p2.right = p1;
                p1 = p1.left;
                continue;
            } else {
                p2.right = null;
                addPath(res, p1.left);
            }
        }
        p1 = p1.right;
    }
    addPath(res, root);
    return res;
}

function addPath(res, node) {
    let count = 0;
    while (node != null) {
        ++count;
        res.push(node.val);
        node = node.right;
    }
    let left = res.length - count, right = res.length - 1;
    while (left < right) {
        let temp = res[left];
        res[left] = res[right];
        res[right] = temp;
        left++;
        right--;
    }
}
/*
 * @Author: leyuans
 * @Date: 2021-09-28 10:20:48
 * @LastEditTime: 2021-10-23 22:51:54
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\3.二叉树的中序遍历.js
 */
/**
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 */
/**
 * 二叉树节点的定义
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
/**
 * 1.递归实现
 * 中序遍历的顺序是：左子树->根节点->右子树
 * 在遍历左子树和右子树的时候也是按照左根右的顺序
 * inorder(root)表示对当前节点进行中序遍历
 */
function inorderTraversal(root) {
    const res = [];
    const inorder = (root) => {
        // 递归终止条件
        if (!root) {
            return;
        }
        // 递归遍历左子树
        inorder(root.left);
        // 将根节点添加至结果数组
        res.push(root.val);
        // console.log(res);
        // 递归遍历右子树
        inorder(root.right);
    }
    inorder(root);
    return res;
}
/**
 * 复杂度分析
 * 时间复杂度：O(n)，其中 n 为二叉树节点的个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。
 * 空间复杂度：O(n)。空间复杂度取决于递归的栈深度，而栈深度在二叉树为一条链的情况下会达到O(n)的级别。
 */

/**
 * 2.非递归实现
 * 借助栈来模拟递归
 */
function inoderTraversal(root) {
    const res = [];
    const stack = [];
    // 当节点非空或栈非空
    while (root || stack.length) {
        // 一直往左遍历直到叶子节点
        while (root) {
            // 将节点进栈
            stack.push(root);
            // 将当前节点的左子节点赋值给当前节点
            root = root.left;
        }
        // 此时root==null，说明上一步的root没有左子树
        // 1.出栈
        // 2.将节点值添加到结果数组
        root = stack.pop();
        res.push(root.val);
        // 遍历右子树
        root = root.right;
    }
    return res;
}
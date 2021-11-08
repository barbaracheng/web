/*
 * @Author: leyuans
 * @Date: 2021-11-08 13:38:21
 * @LastEditTime: 2021-11-08 15:08:35
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\26.树的子结构.js
 */
/**
 * 题目描述：
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 * B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 解题思路：
 * 若树B是树A的子结构，则子结构的根节点可能为树A的任意一个节点。
 * 因此，判断树B是否是树A的子结构，需要完成以下两步操作：
 * 1.先序遍历树A的每个节点na（对应函数isSubStructure(A,B)
 * 2.判断树A中以na为根节点的的子树是否包含树B（对应函数recur(A,B)
 * 
 * 算法流程：
 * recur(A,B)函数：
 * 1.终止条件：
 *      1.当节点A为空：说明已经越过树A的叶子节点，匹配失败，返回false
 *      2.当节点B为空：说明树B已经匹配完成，返回true
 *      3.当节点A和节点B的值不相同：说明匹配失败，返回false
 * 2.返回值：
 *      1.判断A和B的左子节点是否相等，即recur(A.left,B.left)
 *      2.判断A和B的右子节点是否相等，即recur(A.right,B.right)
 * 
 * isSubStructure(A,B)函数:
 * 1.特例处理：当树A或者树B为空时返回false
 * 2.返回值：若树B是树A的子结构，则必须满足以下三种情况之一，用||连接。
 *      1.以节点A为根节点的子树包含树B，对应recur(A,B)
 *      2.树B是树A左子树的子结构，对应isSubStructure(A.left,B)
 *      3.树B是树A右子树的子结构，对应isSubStructure(A.right,B)
 * 
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
function recur(A, B) {
    if (B === null) {
        return true;
    }
    if (A === null || A.val !== B.val) {
        return false;
    }
    return recur(A.left, B.left) && recur(A.right, B.right);
}
var isSubStructure = function (A, B) {
    if (A === null || B === null) {
        return false;
    }
    return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

/**
 * 复杂度分析：
 * 时间复杂度 O(MN)： 其中 M,N 分别为树 A和 树 B的节点数量；先序遍历树 A占用 O(M)，每次调用 recur(A, B) 判断占用 O(N)。
 * 空间复杂度 O(M)： 当树 A 和树 B 都退化为链表时，递归调用深度最大。当 M≤N 时，遍历树 A与递归判断的总递归深度为 M ；
 * 当 M>N 时，最差情况为遍历至树 A叶子节点，此时总递归深度为 M。
 */
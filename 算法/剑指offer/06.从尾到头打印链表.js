/*
 * @Author: leyuans
 * @Date: 2021-11-04 09:22:52
 * @LastEditTime: 2021-11-04 09:36:10
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\06.从尾到头打印链表.js
 */
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 方法一：先翻转链表，再遍历翻转后的链表
var reversePrint = function (head) {
    let ans = [], p = head, prev = null;
    while (p) {
        let temp = p.next;
        p.next = prev;
        prev = p;
        p = temp;
    }
    while (prev) {
        ans.push(prev.val);
        prev = prev.next;
    }
    return ans;
};

// 方法二：遍历链表，将值直接存进栈，再从栈中弹出值存进结果数组
var reversePrint = function (head) {
    let ans = [], stack = [];
    while (head) {
        stack.push(head.val);
        head = head.next;
    }
    while (stack.length) {
        ans.push(stack.pop());
    }
    return ans;
};

// 方法三：递归。先递归走到链表尾，然后回溯时添加节点的值
var reversePrint = function (head) {
    let temp = [];
    function reverse(head) {
        if (!head) {
            return;
        } else {
            // 一直递归到节点为空
            reverse(head.next);
            // 开始回溯
            temp.push(head.val);
        }
    }
    reverse(head);
    return temp;
};
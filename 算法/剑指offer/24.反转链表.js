/*
 * @Author: leyuans
 * @Date: 2021-11-04 09:37:17
 * @LastEditTime: 2021-11-04 09:39:27
 * @LastEditors: leyuans
 * @Description: 反转链表
 * @FilePath: \web-projects\算法\剑指offer\24.反转链表.js
 */
// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null, cur = head, temp = cur;
    while (cur) {
        temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
};
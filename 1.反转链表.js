/*
 * @Author: leyuans
 * @Date: 2021-09-24 18:36:45
 * @LastEditTime: 2021-09-24 18:43:49
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\1.反转链表.js
 */
/**
 * 题目链接：https://leetcode-cn.com/problems/UHnkqh/
 * 题目描述：给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
 * 
 */
/* Definition for singly-linked list. */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function (head) {
    let pre = null, tmp = null, cur = head;
    while (cur) {
        // tmp保存当前节点的下一个节点
        tmp = cur.next;
        // 将当前节点的下一个节点指向pre
        cur.next = pre;
        // 将pre移动到当前节点
        pre = cur;
        // 将当前节点移动到下一个节点
        cur = tmp;
    }
    return pre;
}

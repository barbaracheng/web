/*
 * @Author: leyuans
 * @Date: 2021-11-04 10:11:13
 * @LastEditTime: 2021-11-04 10:12:26
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\35.复杂链表的复制.js
 */

/**
 * 请实现 copyRandomList 函数，复制一个复杂链表。
 * 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
 * 还有一个 random 指针指向链表中的任意节点或者 null。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) {
        return null;
    }
    let map = new Map();
    let cur = head;
    // 构建链表节点到新链表节点的映射
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    // 构建next指针和random指针
    cur = head;
    while (cur) {
        // 注意cur.next和cur.random有可能是null
        map.get(cur).next = map.get(cur.next) || null;
        map.get(cur).random = map.get(cur.random) || null;
        cur = cur.next;
    }
    return map.get(head);
};
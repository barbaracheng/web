/*
 * @Author: leyuans
 * @Date: 2021-09-30 16:31:08
 * @LastEditTime: 2021-09-30 21:03:17
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/merge-k-sorted-lists/submissions/
 * @FilePath: \web-projects\算法\13.合并K个排序列表.js
 */
/**
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let ans = null;
    // 遍历一遍数组，两两合并
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }
    return ans;

    // 合并两个链表
    function mergeTwoLists(l1, l2) {
        let head = new ListNode(0), tail = head, p1 = l1, p2 = l2;
        if (!l1 || !l2) {
            return l1 ? l1 : l2;
        }
        while (p1 && p2) {
            if (p1.val <= p2.val) {
                tail.next = p1;
                p1 = p1.next;
            } else {
                tail.next = p2;
                p2 = p2.next;
            }
            tail = tail.next;
        }
        if (p1) {
            tail.next = p1;
        }
        if (p2) {
            tail.next = p2;
        }
        return head.next;
    }
};

/**
 * 2.分治法
 */
// 合并两个链表
function mergeTwoLists(l1, l2) {
    let head = new ListNode(0), tail = head, p1 = l1, p2 = l2;
    if (!l1 || !l2) {
        return l1 ? l1 : l2;
    }
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            tail.next = p1;
            p1 = p1.next;
        } else {
            tail.next = p2;
            p2 = p2.next;
        }
        tail = tail.next;
    }
    if (p1) {
        tail.next = p1;
    }
    if (p2) {
        tail.next = p2;
    }
    return head.next;
}

/**
 * 
 * @param {number[]} lists 
 * @param {number} l 
 * @param {number} r 
 * @returns 划分的数组
 */
// 分治法：将链表数组逐步划分为两个部分
function merge(lists, l, r) {
    if (l === r) {
        return lists[l];
    }
    if (l > r) {
        return null;
    }
    let mid = Math.floor((l + r) / 2),
        l1 = merge(lists, l, mid),
        l2 = merge(lists, mid + 1, r);
    return mergeTwoLists(l1, l2);
}
// 合并k个链表
function mergeKLists(lists) {
    if (!lists.length || !lists) {
        return null;
    }
    return merge(lists, 0, lists.length - 1);
}

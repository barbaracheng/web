/*
 * @Author: leyuans
 * @Date: 2021-09-30 15:30:22
 * @LastEditTime: 2021-09-30 15:57:48
 * @LastEditors: leyuans
 * @Description: 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * @FilePath: \web-projects\算法\11.合并两个排序的链表.js
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 双指针
/**
 * 根据题目描述， 链表 l1, l2是 递增 的，因此容易想到使用双指针l1和l2遍历两链表，
 * 根据 l1.val 和 l2.vall的大小关系确定节点添加顺序，两节点指针交替前进，直至遍历完毕.
 * 引入伪头节点：由于初始状态合并链表中无节点，因此循环第一轮时无法将节点添加到合并链表中。
 * 解决方案：初始化一个辅助节点 dum 作为合并链表的伪头节点，将各节点添加至 dum 之后。
 */
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode(0), tail = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (l1) {
        tail.next = l1;
    }
    if (l2) {
        tail.next = l2;
    }
    return head.next;
};

/**
 * 递归方法
 * 我们可以如下递归地定义两个链表里的 merge 操作（忽略边界情况，比如空链表等）：
 * list1[0]+merge(list1[1:],list2) 当list1[0]<list2[0]
 * list2[0]+merge(list1,list2[1:]) 其他情况
 * 也就是说，两个链表头部值较小的一个节点与剩下元素的 merge 操作结果合并。
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
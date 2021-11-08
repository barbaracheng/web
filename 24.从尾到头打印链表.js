/*
 * @Author: leyuans
 * @Date: 2021-10-14 09:39:14
 * @LastEditTime: 2021-10-14 09:43:41
 * @LastEditors: leyuans
 * @Description: https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=23278&ru=/ta/sql-quick-study&qru=/ta/sql-quick-study/question-ranking
 * @FilePath: \web-projects\算法\24.从尾到头打印链表.js
 */
/**
 * 输入一个链表的头节点，按链表从尾到头的顺序返回每个节点的值（用数组返回）。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 方法一：遍历链表并将结点的值添加到数组最后翻转数组
function printListFromTailToHead(head) {
    let ans = [];
    while (head != null) {
        ans.push(head.val);
        head = head.next;
    }
    return ans.reverse();
}

// 方法二：遍历链表，用数组的unshift()方法添加结点的值
function printListFromTailToHead(head) {
    let ans = [];
    while (head != null) {
        ans.unshift(head.val);
        head = head.next;
    }
    return ans;
}

// 方法三：递归，在回溯时添加结点的值
function printListFromTailToHead(head) {
    let ans = [];
    function f(head) {
        if (head != null) {
            f(head.next);
            ans.push(head.val);
        }
        return ans;
    }
    return f(head);
}
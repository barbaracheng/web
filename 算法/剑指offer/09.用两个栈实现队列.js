/*
 * @Author: leyuans
 * @Date: 2021-11-02 13:58:53
 * @LastEditTime: 2021-11-02 14:03:15
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\09.用两个栈实现队列.js
 */
/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 - 1 )
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 */

// 思路：一个栈专门用来进行入队操作，另一个栈用来进行出队操作；
// 出栈时，如果stk2中有元素，则直接出栈；
// 如果stk2中没有元素，则将stk1中的元素全部弹出到stk2，然后再弹出stk2栈顶的元素；如果stk1也为空，则返回 - 1
var CQueue = function () {
    this.stk1 = [];
    this.stk2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stk1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (!this.stk2.length) {
        if (!this.stk1.length) {
            return -1;
        }
        while (this.stk1.length) {
            this.stk2.push(this.stk1.pop());
        }
    }
    return this.stk2.pop();
};
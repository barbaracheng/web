/*
 * @Author: leyuans
 * @Date: 2021-11-02 11:50:55
 * @LastEditTime: 2021-11-02 12:15:24
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\45.用两个栈实现队列.js
 */
/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
*/

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
    // 首先判断stk2中是否为空，为空的话再去看看stk1是否为空
    if (!this.stk2.length) {
        if (!this.stk1.length) {
            return -1;
        }
        // 将stk1中的值都弹到stk2中
        while (this.stk1.length) {
            this.stk2.push(this.stk1.pop());
        }
    }
    return this.stk2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
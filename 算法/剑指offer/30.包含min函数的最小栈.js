/*
 * @Author: leyuans
 * @Date: 2021-11-02 13:52:19
 * @LastEditTime: 2021-11-02 13:58:02
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\30.包含min函数的最小栈.js
 */
/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

// 方法一：辅助栈
var MinStack = function () {
    this.stack = [];
    this.min_stack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.min_stack[this.min_stack.length - 1];
};


// 方法二：不使用辅助栈，入栈出栈都使用元组，即入栈时保存当前元素和当前栈内的最小值；出栈时也同时出栈
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (!this.stack.length) {
        this.stack.push([x, x]);
    } else {
        this.stack.push([x, Math.min(this.stack[this.stack.length - 1][1], x)]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.stack[this.stack.length - 1][1];
};

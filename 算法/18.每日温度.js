/*
 * @Author: leyuans
 * @Date: 2021-10-04 16:50:20
 * @LastEditTime: 2021-10-04 17:16:26
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/daily-temperatures/
 * @FilePath: \web-projects\算法\18.每日温度.js
 */

/**
 * 请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。
 * 如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 单调栈，遍历一遍元素，循环判断（当当前温度高于栈顶元素的温度时，弹出栈顶元素，并记录弹出元素等待的天数），将当前元素的下标入栈
var dailyTemperatures = function (temperatures) {
    const n = temperatures.length, stack = [], res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i);
    }
    return res;
};

// 暴力破解，双重循环
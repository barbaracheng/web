/*
 * @Author: leyuans
 * @Date: 2021-10-04 17:14:52
 * @LastEditTime: 2021-10-04 17:30:14
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/next-greater-element-ii/
 * @FilePath: \web-projects\算法\19.下一个更大元素Ⅱ.js
 */

/**
 * 题目描述：
 * 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。
 * 数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，
 * 这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。
 * @param {number[]} nums
 * @return {number[]}
 */
// 双重循环，暴力破解
var nextGreaterElements = function (nums) {
    const res = new Array(nums.length).fill(-1), n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = (i + 1) % n; j != i; j = (j + 1) % n) {
            if (nums[j] > nums[i]) {
                res[i] = nums[j];
                break;
            }
        }
    }
    return res;
};

// 单调栈，把数组元素拉长（不用真的去复制一遍数组，而是通过变换下标，让下标从0到2*n-1，n为数组长度
// 对下标取余
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = [];
    for (let i = 0; i < 2 * n - 1; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
            let index = stack.pop();
            res[index] = nums[i % n];
        }
        stack.push(i % n);
    }
    return res;
};
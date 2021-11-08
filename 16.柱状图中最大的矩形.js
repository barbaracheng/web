/*
 * @Author: leyuans
 * @Date: 2021-10-04 09:39:48
 * @LastEditTime: 2021-10-04 15:02:59
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * @FilePath: \web-projects\算法\16.柱状图中最大的矩形.js
 */

/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
// 双重循环，固定宽度，找出最小高度，计算面积
var largestRectangleArea = function (heights) {
    let ans = 0;
    // 枚举左边界
    for (let i = 0; i < heights.length; i++) {
        let height = Infinity;
        // 枚举右边界
        for (let j = i; j < heights.length; j++) {
            // 找到最小高度并计算面积
            height = Math.min(height, heights[j]);
            ans = Math.max(ans, height * (j - i + 1));
        }
    }
    return ans;
};

//
var largestRectangleArea = function (heights) {
    let ans = 0, n = heights.length;
    // 枚举高度，从当前柱子开始向两侧延伸，直到遇到的柱子高度比当前柱子高度小
    for (let mid = 0; mid < n; mid++) {
        let height = heights[mid], left = mid, right = mid;
        // 往左侧延伸
        while (left - 1 >= 0 && heights[left - 1] >= height) {
            --left;
        }
        // 往右侧延伸
        while (right + 1 < n && heights[right + 1] >= height) {
            ++right;
        }
        ans = Math.max(ans, height * (right - left + 1));
    }
    return ans;
}

// 单调栈
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length, left = new Array(n).fill(0), right = new Array(n).fill(0);
    let stack = [];
    // 从左往右遍历，找出每个元素的左边界
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) {
            left[i] = stack[stack.length - 1];
        } else {
            left[i] = -1;
        }
        stack.push(i);
    }
    stack = [];
    // 从右往左遍历，找出每个元素的右边界 
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) {
            right[i] = stack[stack.length - 1];
        } else {
            right[i] = n;
        }
        stack.push(i);
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }
    return ans;
}

// 单调栈优化
var largestRectangleArea = function (heights) {
    let n = heights.length, left = new Array(n).fill(0), right = new Array(n).fill(n);
    let stack = [];
    // 遍历一遍所有数组元素
    for (let i = 0; i < n; i++) {
        // 当栈不为空且栈顶元素的高度大于等于当前高度，弹出栈顶元素，并将弹出元素的右边界记为当前元素
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            right[stack.pop()] = i;
        }
        // 当栈中大于等于当前元素的元素都已经被弹出栈之后，此时栈中剩余的栈顶元素就是当前元素的左边界
        if (stack.length) {
            left[i] = stack[stack.length - 1];
        } else {
            left[i] = -1;
        }
        // 将元素入栈
        stack.push(i);
    }
    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }
    return ans;
}
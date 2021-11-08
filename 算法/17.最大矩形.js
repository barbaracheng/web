/*
 * @Author: leyuans
 * @Date: 2021-10-04 15:43:03
 * @LastEditTime: 2021-10-04 16:33:38
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/maximal-rectangle/
 * @FilePath: \web-projects\算法\17.最大矩形.js
 */

/**
 * 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 * 
 * @param {character[][]} matrix
 * @return {number}
 */
// 单调栈
var maximalRectangle = function (matrix) {
    const m = matrix.length;
    if (m === 0) {
        return 0;
    }
    const n = matrix[0].length;
    const left = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // 计算每个元素左边的1的个数
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
            }
        }
    }
    let ret = 0;
    // 对于每一列使用基于柱状图的方法
    for (let j = 0; j < n; j++) {
        const up = new Array(m).fill(0);
        const down = new Array(m).fill(0);
        let stack = [];

        for (let i = 0; i < m; i++) {
            while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j]) {
                stack.pop();
            }
            if (stack.length) {
                up[i] = stack[stack.length - 1];
            } else {
                up[i] = -1;
            }
            stack.push(i);
        }
        stack = [];
        for (let i = m - 1; i >= 0; i--) {
            while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j]) {
                stack.pop();
            }
            if (stack.length) {
                down[i] = stack[stack.length - 1];
            } else {
                down[i] = m;
            }
            stack.push(i);
        }
        for (let i = 0; i < m; i++) {
            const height = down[i] - up[i] - 1;
            const area = height * left[i][j];
            ret = Math.max(ret, area);
        }
    }
    return ret;
};

/**
 * 解法一 暴力破解
 * 遍历每个点，求以这个点为矩阵右下角的所有矩阵面积。
 * 
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const m = matrix.length;
    if (m === 0) {
        return 0;
    }
    const n = matrix[0].length;
    const left = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
            }
        }
    }
    let ret = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') {
                continue;
            }
            // 矩阵宽度
            let width = left[i][j];
            let area = width;
            // 向上拓展矩阵的高度
            for (let k = i - 1; k >= 0; k--) {
                width = Math.min(width, left[k][j]);
                area = Math.max(area, (i - k + 1) * width);
            }
            ret = Math.max(ret, area);
        }
    }
    return ret;
};
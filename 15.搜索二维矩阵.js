/*
 * @Author: leyuans
 * @Date: 2021-09-30 22:28:05
 * @LastEditTime: 2021-10-04 09:27:21
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * @FilePath: \web-projects\算法\15.搜索二维矩阵.js
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // 从矩阵右上角开始按规律移动
    // 若当前元素小于目标值，则向下移动；若当前元素大于目标值，则向左移动；若当前元素等于目标值，则返回true
    let i = 0, j = matrix[0].length - 1;
    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] === target) return true;
        else if (matrix[i][j] < target) i++;
        else j--;
    }
    return false;
};

// 二分搜索
let searchMatrix = function (matrix, target) {
    function binarySearch(matrix, target, start, vertical) {
        let i = start, j = vertical ? matrix[0].length - 1 : matrix.length - 1;
        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            if (vertical) {
                // 注意这里只需要变一个下标
                if (matrix[start][mid] < target) {
                    i = mid + 1;
                } else if (matrix[start][mid] > target) {
                    j = mid - 1;
                } else {
                    return true;
                }
            } else {
                // 注意这里只需要变一个下标
                if (matrix[mid][start] < target) {
                    i = mid + 1;
                } else if (matrix[mid][start] > target) {
                    j = mid - 1;
                } else {
                    return true;
                }
            }
        }
    }
    if (matrix.length === 0 || !matrix) {
        return false;
    }
    let shorter = Math.min(matrix.length, matrix[0].length);
    for (let i = 0; i < shorter; i++) {
        let columnRes = binarySearch(matrix, target, i, true);
        let rowRes = binarySearch(matrix, target, i, false);
        if (columnRes || rowRes) {
            return true;
        }
    }
    return false;
}
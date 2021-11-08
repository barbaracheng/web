/*
 * @Author: leyuans
 * @Date: 2021-11-07 22:19:12
 * @LastEditTime: 2021-11-07 22:21:58
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\04.二维数组中的查找.js
 */
/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
 */

/**
 * 题目给的数组有从左到右递增，从上到下递增的规律，当访问到一个元素时，可以排除一部分元素。
 * 从二维数组的右上角开始查找。如果当前元素等于目标值，则返回 true。
 * 如果当前元素大于目标值，则移到左边一列。如果当前元素小于目标值，则移到下边一行。
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let row = matrix.length, col = matrix[0].length;
    let i = 0, j = col - 1;
    while (i < row && j >= 0) {
        let number = matrix[i][j];
        if (number === target) {
            return true;
        } else if (number < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};
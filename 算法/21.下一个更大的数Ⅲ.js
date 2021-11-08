/*
 * @Author: leyuans
 * @Date: 2021-10-04 19:59:54
 * @LastEditTime: 2021-10-04 20:07:12
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/next-greater-element-iii/
 * @FilePath: \web-projects\算法\21.下一个更大的数Ⅲ.js
 */
/**
 * 给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。
 * 如果不存在这样的正整数，则返回 -1 。注意 ，返回的整数应当是一个 32 位整数 ，
 * 如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
    // 将数字转化为数组
    let nums = n.toString().split('');
    // 从右往左找，直到找到一个比它右边的数要小的数，即从在这个数的右边的数都是单调不减的（从右往左看）
    let i = nums.length - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--;
    }
    // 若找到头了还没找到，则说明不存在这样的数
    if (i < 0) {
        return -1;
    }
    // 从右往左找一个比nums[i]大的数
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
        j--;
    }
    // 将nums[i]与nums[j]交换
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    // 将nums数组的i+1~nums.length的部分翻转
    nums = nums.slice(0, i + 1).concat(nums.slice(i + 1).reverse());

    let num = parseInt(nums.join(''));
    // 判断是否溢出
    let ans = num <= Math.pow(2, 31) - 1 ? num : -1;
    return ans;
};
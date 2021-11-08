/*
 * @Author: leyuans
 * @Date: 2021-10-05 09:50:16
 * @LastEditTime: 2021-10-05 09:54:52
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * @FilePath: \web-projects\算法\22.长度最小的子数组.js
 */
/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的连续子数组 
 * [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0 。
 * 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 滑动窗口
var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let i = 0, j = 0, sum = 0, ans = n + 1;
    while (j < n) {
        sum += nums[j];
        // 循环判断当前总和和目标和的大小
        while (sum >= target) {
            ans = Math.min(ans, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    if (ans === n + 1) {
        return 0;
    } else {
        return ans;
    }
};
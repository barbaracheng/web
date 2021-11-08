/*
 * @Author: leyuans
 * @Date: 2021-11-05 08:56:47
 * @LastEditTime: 2021-11-05 09:54:42
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\53.在排序数组中查找数字Ⅰ.js
 */
// 统计一个数字在排序数组中出现的次数。
// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = nums.indexOf(target), end = nums.lastIndexOf(target);
    if (start === -1 || end === -1) {
        return 0;
    } else {
        return end - start + 1;
    }
};


var search = function (nums, target) {
    function binarySearch(nums, target, lower) {
        let left = 0, right = nums.length - 1, ans = nums.length;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > target || (lower && nums[mid] >= target)) {
                right = mid - 1;
                ans = mid;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }

    let ans = 0;
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = rightIdx - leftIdx + 1;
    }
    return ans;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找
var search = function (nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] <= target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    let right = i;
    // 若数组中无target，则提前返回
    if (j >= 0 && nums[j] !== target) {
        return 0;
    }
    i = 0, j = nums.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    let left = j;
    return right - left - 1;
};
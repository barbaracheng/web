/*
 * @Author: leyuans
 * @Date: 2021-10-04 17:37:04
 * @LastEditTime: 2021-10-04 17:48:09
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/next-greater-element-i/
 * @FilePath: \web-projects\算法\20.下一个更大的元素Ⅰ.js
 */
/**
 * 题目描述：
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
 * 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // 初始化结果数组
    const map = new Map(),
        n = nums2.length, stack = [],
        res = new Array(nums1.length).fill(-1);
    // 遍历一遍nums2，找到其中每个元素的下一个更大的元素，并用哈希结构存储
    for (let i = 0; i < n; i++) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            map.set(stack.pop(), nums2[i]);
        }
        // 当栈空或栈顶元素大于等于当前元素时，将当前元素入栈
        stack.push(nums2[i]);
    }
    // 遍历nums1，查找哈希表中是否有对应元素，若有，则写入结果数组
    nums1.forEach((val, index) => {
        if (map.get(val)) {
            res[index] = map.get(val);
        }
    });
    return res;
};
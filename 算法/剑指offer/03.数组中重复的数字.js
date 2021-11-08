/*
 * @Author: leyuans
 * @Date: 2021-11-05 08:26:08
 * @LastEditTime: 2021-11-05 08:57:15
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\03.数组中重复的数字.js
 */
/**
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：遍历数组，用map或则set保存出现过的数字，如果再次碰到已经在map或set中出现的数字，则说明该数字重复
var findRepeatNumber = function (nums) {
    const map = new Map();
    let ans = -1;
    for (const n of nums) {
        if (map.has(n)) {
            ans = n;
            break;
        } else {
            map.set(n, 1);
        }
    }
    return ans;
};

// 方法二：原地交换
/**
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0 ~n - 1 的范围内 。 
 * 此说明含义：数组元素的 索引 和 值 是 一对多 的关系。
 * 因此，可遍历数组并通过交换操作，使元素的 索引 与 值 一一对应（即 nums[i] = i）。
 * 因而，就能通过索引映射对应的值，起到与字典等价的作用。
 */

var findRepeatNumber = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i) {
            i++;
            continue;
        }
        if (nums[nums[i]] === nums[i]) {
            return nums[i];
        }
        let temp = nums[i];
        nums[i] = nums[temp];
        nums[temp] = temp;
    }
    return -1;
};
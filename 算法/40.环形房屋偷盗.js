/*
 * @Author: leyuans
 * @Date: 2021-10-29 21:02:22
 * @LastEditTime: 2021-10-29 22:19:18
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\40.环形房屋偷盗.js
 */

/**
 * 一个专业的小偷，计划偷窃一个环形街道上沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/PzWKhm
 * 该题与力扣213.打家劫舍Ⅱ是同一个题，https://leetcode-cn.com/problems/house-robber-ii/
**/

/**
 * 这道题与之前的房屋偷盗很类似，就是在之前的基础上加了数组头和数组尾不能同时出现的限制
 * 那么其实就可以讲问题拆分为：
 * 1.选了第一个房屋，不选最后一个房屋能获得的最大金额 
 * 2.不选第一个房屋，选最后一个房屋能获得的最大金额
 * 然后最后答案是这两者中的最大值
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    function dynamic(nums, l, r) {
        let pre = 0, cur = 0, temp;
        for (let i = l; i <= r; i++) {
            temp = cur;
            cur = Math.max(pre + nums[i], cur);
            pre = temp;
        }
        return cur;
    }
    let len = nums.length;
    //  如果数组元素个数小于等于3，则直接找出它们中的最大值返回即可
    if (len <= 3) {
        return Math.max(...nums);
    }
    return Math.max(dynamic(nums, 0, len - 2), dynamic(nums, 1, len - 1));
};
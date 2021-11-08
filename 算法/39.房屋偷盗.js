/*
 * @Author: leyuans
 * @Date: 2021-10-29 21:02:09
 * @LastEditTime: 2021-10-29 21:41:10
 * @LastEditors: leyuans
 * @Description:
 * @FilePath: \web-projects\算法\39.房屋偷盗.js
 */
//
// 一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
// 影响小偷偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/Gu0c2T
// 该题与力扣198.打家劫舍是同一个题，https://leetcode-cn.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 动态规划方法求解
 * 定义一个dp数组，dp[i]表示从第0间到第i间房能偷盗的最高金额
 * 当我们在第i间房的时候，可以选择偷或者不偷，选择偷的话，那么当前获得的金额为dp[i-2]+nums[i]；不偷的话，那么当前获得的金额为dp[i-1]
 * 特殊情况：当数组只有一个元素时，只能选择该元素；当数组有两个元素时，选择这两个中最大的一个；
 * */
var rob = function (nums) {
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    const dp = new Array(len + 1).fill(0);
    dp[1] = nums[0];
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[len];
};


// 动态规划改进：不用dp数组，只用两个变量即可
var rob = function (nums) {
    let pre = 0, cur = 0, temp;
    for (const num of nums) {
        temp = cur;
        cur = Math.max(pre + num, cur);
        pre = temp;
    }
    return cur;
};
/*
 * @Author: leyuans
 * @Date: 2021-10-29 10:06:59
 * @LastEditTime: 2021-10-29 10:10:58
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\34.零钱兑换.js
 */
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 动态规划
// dp[i]表示凑成总金额i所需要的最少的硬币个数
// 状态转移方程为：dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)，j从0到coins.length-1，
var coinChange = function (coins, amount) {
    let max = amount + 1;
    const dp = new Array(max).fill(max);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
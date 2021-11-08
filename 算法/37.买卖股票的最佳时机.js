/*
 * @Author: leyuans
 * @Date: 2021-10-29 10:49:00
 * @LastEditTime: 2021-10-29 11:02:36
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\37.买卖股票的最佳时机.js
 */
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力法
var maxProfit = function (prices) {
    let max = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > max) {
                max = profit;
            }
        }
    }
    return max;
};


/**
 * 遍历一遍股票价格，当我们在某一天准备卖出的时候，
 * 我们想要找到历史最低股票价格，如果能在历史最低股票价格购买股票，那么当前就能赚的最多。
 *  
 * */
var maxProfit = function (prices) {
    let maxProfit = 0, minPrice = Infinity;
    for (let i = 0; i < prices.length; i++) {
        // 寻找在第i天之前的最低股票价格
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // 计算第i天卖出并且以历史最低价格买入的股票收益，更新最大利润
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}
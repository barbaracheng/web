/*
 * @Author: leyuans
 * @Date: 2021-09-29 11:28:47
 * @LastEditTime: 2021-09-29 18:01:26
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\7.斐波那契数列.js
 */
/**
 * 斐波那契数列：斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 */
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 1.递归方法
 */
var fib = function (n) {
    if (n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

/**
 * 2.带备忘录的递归
 */
let fib = function (n) {
    // dp初始化全为0
    const dp = new Array(n).fill(0);
    function helper(n) {
        if (n < 2) {
            return n;
        }
        // 已经计算过就不用再进行递归了
        if (dp[n]) {
            return dp[n];
        }
        dp[n] = helper(n - 1) + helper(n - 2);
        return dp[n];
    }
    return helper(n);
}
/**
 * 3.动态规划
 */
var fib = function (n) {
    if (n < 0) {
        return 0;
    }
    let dp = new Array(n + 1).fill(0);
    dp[0] = 0, dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

/**
 * 4.迭代
 * dp数组中每次我们只需要用到两个数就可以了，因此我们只需要用两个变量来保存前两个数
 * 然后交替执行就能得到结果
 */
var fib = function (n) {
    let a = 0, b = 1;
    while (n) {
        let temp = a;
        a = b;
        b = temp + b;
        n--;
    }
    return a;
};
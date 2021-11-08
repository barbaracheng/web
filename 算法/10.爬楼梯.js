/*
 * @Author: leyuans
 * @Date: 2021-09-30 11:16:33
 * @LastEditTime: 2021-09-30 14:38:33
 * @LastEditors: leyuans
 * @Description: 题目链接：https://leetcode-cn.com/problems/climbing-stairs/
 * @FilePath: \web-projects\算法\10.爬楼梯.js
 */
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

/**
 * 1.动态规划法
 * 令f(x)表示爬到x阶的方法
 * 则我们考虑一下爬到第x阶的前一个状态，由于我们只能爬一个或两个台阶，
 * 所以到达第x阶的情况有两种：1.先爬到了第x-1阶，然后爬1阶到达第x阶  2.先爬到第x-2阶，然后爬2阶到达第x阶
 * 也就是爬到第x阶的前一个状态可以是f(x-1)，f(x-2)
 * 状态转移方程：f(x) = f(x-1) +f(x-2)
 */
/**
 * 
 * @param {number} n 台阶数
 */
function climbStairs(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

/**
 * 2.动态规划优化
 * 以上是动态规划的转移方程，下面我们来讨论边界条件。
 * 我们是从第 0 级开始爬的，所以从第 0 级爬到第 0 级我们可以看作只有一种方案，即 f(0) = 1；
 * 从第 0 级到第 1 级也只有一种方案，即爬一级，f(1) = 1。
 * 这两个作为边界条件就可以继续向后推导出第 n 级的正确结果。
 * 我们不妨写几项来验证一下，根据转移方程得到 f(2) = 2，f(3) = 3，f(4) = 5，……，
 * 我们把这些情况都枚举出来，发现计算的结果是正确的。
 * 作者：LeetCode-Solution
 * 链接：https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/
 * 来源：力扣（LeetCode）
 */
function climbStairs(n) {
    let a = 0, b = 0, c = 1;
    for (let i = 1; i <= n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
}

/**
 * 3.递归方法(会超时)
 * 时间复杂度： O(2^n) ，每一层递归的复杂度是上一层递归的2倍
 * 空间复杂度： O(n) , n是递归的层次
 */
function climbStairs(n) {
    if (n === 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
}

/**
 * 4.递归优化
 * 递归时间复杂度高的原因是因为存在大量重复计算
 * 如果将已经计算过的结果保存起来，当下次递归前先查表看看该元素是否已经计算过，
 * 如果计算过就直接取出来用，如果未计算过就先进行递归，然后将递归结果保存，方便下次查表
 */
const map = new Map();
function climbStairs(n) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        if (map.has(n)) {
            return map.get(n);
        } else {
            let res = climbStairs(n - 1) + climbStairs(n - 2);
            map.set(n, res);
            return res;
        }
    }
}

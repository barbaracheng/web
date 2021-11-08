/*
 * @Author: leyuans
 * @Date: 2021-09-30 09:16:00
 * @LastEditTime: 2021-09-30 10:58:11
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\9.走方格的方案数.js
 */
/**
 * 描述
 * 请计算n*m的棋盘格子（n为横向的格子数，m为竖向的格子数）沿着各自边缘线从左上角走到右下角，总共有多少种走法，要求不能走回头路，即：只能往右和往下走，不能往左和往上走。
 * 本题含有多组样例输入。
 * 输入描述：
 * 每组样例输入两个正整数n和m，用空格隔开。(1≤n,m≤8)
 * 
 * 输出描述：
 * 每组样例输出一行结果
 * 
 * 题目链接：https://www.nowcoder.com/practice/e2a22f0305eb4f2f9846e7d644dba09b?tpId=37&&tqId=21314&rp=1&ru=/ta/huawei&qru=/ta/huawei/question-ranking
 */

/**
 * 
 * @param {number} m 横向的格子数
 * @param {number} n 纵向的格子数
 * @returns 总的走法
 */
// 可以将从左上角走到右下角看成从坐标(m,n)到达(0,0)，每次要么往右走，即m-1；要么往下走，即n-1；
// 当m和n其中有一个为0时，即走到边界了，此时只会有一种走法
function f(m, n) {
    if (m === 0 || n === 0) {
        return 1;
    } else {
        return f(m - 1, n) + f(m, n - 1);
    }
}

// 动态规划方法
function f(m, n) {
    /**
     * dp数组表示的是当前的走法数
     * dp[i][j]表示从(0,0)到(n,m)的走法数
     * 由于每次只能向右或向下走，所以当i或j有一个为0时，即当前走到了方格的边界，此时只可能有一种走法
     */
    const dp = new Array(n + 1).fill(0).map(new Array(m + 1).fill(0));
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            // 处在边界上时只有一种走法
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[n][m];
}

/**
 * 3.数学解法
 * 从(0,0)到(m,n)一共需要向右走m次，向下走n次
 * 即总共的次数为m+n，而我们需要的是从这m+n次中挑出刚好向右走m次且向下走n次的
 */
function f(m, n) {
    let up = 1,
        down = 1;
    for (let i = 0; i < m; i++) {
        up *= m + n - i;
        down *= i + 1;
    }
    return Math.floor(up / down);
}
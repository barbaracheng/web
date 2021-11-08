// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 现在考虑网格中有障碍物。网格中的障碍物和空位置分别用 1 和 0 来表示。那么从左上角到右下角将会有多少条不同的路径？
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/unique-paths-ii

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    // 初始化第一列的值
    for(let i=0; i<m && obstacleGrid[i][0] === 0; i++){
        dp[i][0] = 1;
    }
    // 初始化第一行的值
    for(let j=0; j<n && obstacleGrid[0][j] === 0; j++){
        dp[0][j] = 1;
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            // 当没有障碍物时，dp[i][j] = dp[i-1][j] + dp[i][j-1];
            if(obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
};
/*
 * @Author: leyuans
 * @Date: 2021-10-04 20:33:57
 * @LastEditTime: 2021-10-05 09:54:56
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/number-of-provinces/
 * @FilePath: \web-projects\算法\22.省份数量.js
 */
/**
 * 题目描述：
 * 有 n 个城市，其中一些彼此相连，另一些没有相连。
 * 如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
 * 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
 * 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，
 * 而 isConnected[i][j] = 0 表示二者不直接相连。返回矩阵中 省份 的数量。
 * 
 * 上述问题其实是找无向图的连通分量
 * 可以使用深度优先搜索或广度优先搜索，还有并查集
 * @param {number[][]} isConnected
 * @return {number}
 */
// 深度优先搜索
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    let ans = 0;
    // visited用来存储遍历过的结点
    const visited = new Set();
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(isConnected, visited, i);
            ans++;
        }
    }
    return ans;

    function dfs(isConnected, visited, i) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] == 1 && !visited.has(j)) {
                visited.add(j);
                dfs(isConnected, visited, j);
            }
        }
    }
};

// 广度优先搜索
var findCircleNum = function (isConnected) {
    const n = isConnected.length,
        visited = new Set(),
        queue = [];
    let ans = 0;
    // 遍历一遍图的所有结点
    for (let i = 0; i < n; i++) {
        // 如果当前结点未被访问则加入队列
        if (!visited.has(i)) {
            queue.push(i);
            // 当队列不为空时，弹出队首元素并进行对它的相邻结点遍历
            while (queue.length) {
                const j = queue.shift();
                visited.add(j); // 设置访问标志
                for (let k = 0; k < n; k++) {
                    if (isConnected[j][k] === 1 && !visited.has(k)) {
                        queue.push(k);
                    }
                }
            }
            ans++;
        }
    }
    return ans;
}


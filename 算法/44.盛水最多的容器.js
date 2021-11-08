/*
 * @Author: leyuans
 * @Date: 2021-11-02 11:29:04
 * @LastEditTime: 2021-11-02 11:48:46
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/container-with-most-water/
 * @FilePath: \web-projects\算法\44.盛水最多的容器.js
 */
/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/container-with-most-water
*/
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力破解（超出时间限制）
var maxArea = function (height) {
    let ans = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
        }
    }
    return ans;
};

/**
 * 双指针解法：设置两个指针，分别代表两个边界；
 * 计算这两个边界围起来的矩形的面积；
 * 当左边的高度小于等于右边的高度时，让左边指针向右走；否则，右边指针向左走
 */
var maxArea = function (height) {
    let ans = 0, left = 0, right = height.length - 1;
    while (left < right) {
        ans = Math.max(Math.min(height[left], height[right]) * (right - left), ans);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
};
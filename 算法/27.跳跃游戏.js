// https://leetcode-cn.com/problems/jump-game/
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。

// 贪心法：找最远能到达的距离
function canJump(nums) {
    let right = 0;
    for (let i = 0; i < nums.length; i++) {
        // 如果当前位置在能达到的最远距离之内，则下一次的起点可以从当前位置开始
        if (i <= right) {
            right = Math.max(right, i+nums[i]);
            // 如果当前能到达的最远距离大于等于数组最后一个元素的下标，则返回true
            if (right >= nums.length-1){
                return true;
            }
        }
    }
    return false;
}

function canJump1(nums) {
    let right = 0;
    for (let i = 0; i < nums.length; i++) {
        // 如果在遍历过程中发现当前位置i比最远能到达的位置right还要大，则说明永远无法到达i
        if (i > right) {
            return false;
        }
        right = Math.max(right, i+nums[i]);
    }
    return true;
}
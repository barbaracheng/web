// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/jump-game-ii

// 给你一个非负整数数组nums ，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
// 假设你总是可以到达数组的最后一个位置。


/**
 * 在具体的实现中，我们维护当前能够到达的最大下标位置，记为边界。我们从左到右遍历数组，到达边界时，更新边界并将跳跃次数增加 1。
 * 在遍历数组时，我们不访问最后一个元素，这是因为在访问最后一个元素之前，我们的边界一定大于等于最后一个位置，
 * 否则就无法跳到最后一个位置了。如果访问最后一个元素，在边界正好为最后一个位置的情况下，
 * 我们会增加一次「不必要的跳跃次数」，因此我们不必访问最后一个元素。
 * @param nums
 * @returns {number}
 */
function jump(nums) {
    let maxPosition = 0; // 目前能跳到的最远位置
    let step = 0; // 跳跃次数
    let end = 0; // 上次跳跃可达到的最远位置（有边界）
    // 注意：for循环没有遍历到数组最后一个元素
    for (let i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, i+nums[i]);
        // 到达本次跳跃的右边界
        if (i === end) {
            // 更新下次跳跃的右边界
            end = maxPosition;
            // 跳跃次数+1
            step++;
        }
    }
    return step;
}
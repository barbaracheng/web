/*
 * @Author: leyuans
 * @Date: 2021-09-30 21:32:10
 * @LastEditTime: 2021-09-30 22:28:12
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\14.多数元素.js
 */
/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/majority-element
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 遍历数组，用map保存数组元素以及数组元素出现的次数
var majorityElement = function (nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (const num of map.keys()) {
        if (map.get(num) > Math.floor(nums.length / 2)) {
            return num;
        }
    }
};

/**
 * 先排序，排序后数组下标为[n/2]的元素就是要找的数
 */
var majorityElement = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    return nums[Math.floor(n / 2)];
};

/**
 * 摩尔投票法
 * 候选人(ans)初始化为nums[0]，票数(count)初始化为1
 * 当遇到与ans相同的元素时，count++；
 * 当遇到与ans不同的元素时，count--；
 * 当count===0时，更换候选人，并将票数重新置为1
 * 遍历完数组后，ans即为最终答案
 * 
 * 可行性分析：
 * 投票法是遇到相同的则票数+1，遇到不同的则票数-1
 * 且“多数元素”的个数> n/2(向下取整)，其余元素的个数 <= n/2(向下取整)
 * 因此“多数元素”的个数 - 其余元素的个数的总和 会大于等于1
 * 这就相当于每个多数元素与其余元素相抵消后，抵消到最后肯定还剩余至少一个“多数元素”
 * 
 */
var majorityElement = function (nums) {
    const n = nums.length;
    let ans = nums[0], count = 1;
    for (let i = 1; i < n; i++) {
        if (ans === nums[i]) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            ans = nums[i];
            count = 1;
        }
    }
    return ans;
};
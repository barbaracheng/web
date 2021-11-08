/*
 * @Author: leyuans
 * @Date: 2021-10-14 11:31:53
 * @LastEditTime: 2021-10-14 11:38:33
 * @LastEditors: leyuans
 * @Description: https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * @FilePath: \web-projects\算法\26.旋转数组的最小数字.js
 */
/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    // 设置i，j两个指针，分别指向数组头和尾
    let i = 0, j = numbers.length - 1;
    while (i < j) {
        // 取中间的数与j所指的数比较
        let mid = i + Math.floor((j - i) / 2);
        if (numbers[mid] < numbers[j]) {
            j = mid;
        } else if (numbers[mid] > numbers[j]) {
            i = mid + 1;
        } else {
            // 注意：当numbers[mid]与numbers[j]相等的时候，无法判断到底最终结果在哪边，
            // 但是可以知道j右边的数一定不符合要求，所以让j--
            j--;
        }
    }
    return numbers[i];
};
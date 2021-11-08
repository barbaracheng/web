/*
 * @Author: leyuans
 * @Date: 2021-11-07 22:23:41
 * @LastEditTime: 2021-11-07 22:45:17
 * @LastEditors: leyuans
 * @FilePath: \web-projects\算法\剑指offer\11.旋转数组的最小数字.js
 * @Description: 
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
 * 来源：力扣（LeetCode）链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
/**  
 * 数组中的最后一个元素 x：在最小值右侧的元素，它们的值一定都小于等于 x；
 * 而在最小值左侧的元素，它们的值一定都大于等于 x。
 * 因此，我们可以根据这一条性质，通过二分查找的方法找出最小值。
 */
var minArray = function (numbers) {
    let i = 0, j = numbers.length - 1;
    while (i < j) {
        const mid = Math.floor((i + j) / 2);
        if (numbers[mid] > numbers[j]) {
            i = mid + 1;
        } else if (numbers[mid] < numbers[j]) {
            // 注意这里不是j=mid-1，因为不能直接跳过mid,有可能mid所在位置就为最小值
            j = mid;
        } else {
            j--;
        }
    }
    // 退出循环时，i===j===mid，任意返回一个都可以
    return numbers[i];
};
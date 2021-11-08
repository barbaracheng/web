/*
 * @Author: leyuans
 * @Date: 2021-11-05 10:32:12
 * @LastEditTime: 2021-11-05 10:55:57
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\53.Ⅱ0~n-1中缺失的数字.js
 */
/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 解题思路：
 * 排序数组中的搜索问题，首先想到 二分法 解决。
 * 根据题意，数组可以按照以下规则划分为两部分。
 * 左子数组： nums[i] ===i ；
 * 右子数组： nums[i] !== i ；
 * 缺失的数字等于 “右子数组的首位元素” 对应的索引；因此考虑使用二分法查找 “右子数组的首位元素” 
 * 
 * 算法解析：
 * 初始化： 左边界 i = 0，右边界 j=len(nums)−1 ；代表闭区间 [i,j] 。
 * 循环二分： 当 i≤j 时循环 （即当闭区间 [i, j]为空时跳出） ；
 * 计算中点 m = (i + j) // 2 ，其中 "//" 为向下取整除法；
 * 若 nums[m] == m ，则 “右子数组的首位元素” 一定在闭区间 [m+1,j] 中，因此执行 i=m+1；
 * 若 nums[m] != m ，则 “左子数组的末位元素” 一定在闭区间 [i,m−1] 中，因此执行 j=m−1；
 * 返回值： 跳出时，变量 i 和 j 分别指向 “右子数组的首位元素” 和 “左子数组的末位元素” 。因此返回 i 即可。
 */
// 二分查找：令i，j分别指向数组首部和尾部，mid为区间(i, j)的中点；
// 当nums[mid] !== mid时，说明在区间()中的元素都是正确的，
// 当nums[mid] === mid时，说明区间(i,mid)中没有缺失元素，所以查找范围变为(mid+1,j)
var missingNumber = function (nums) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] !== mid) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    return i;
};


// 遍历
var missingNumber = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return n;
};


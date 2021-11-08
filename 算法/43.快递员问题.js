/*
 * @Author: leyuans
 * @Date: 2021-11-01 17:12:55
 * @LastEditTime: 2021-11-01 17:12:55
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\43.快递员问题.js
 */
// 1、快递员问题。提供一个数组，数组各项代表一个地址，内容为1或者0，1代表此地有包裹需要快递员配送，
// 0代表此地没有包裹需要配送，每个快递员可以配送指定位置及其左右相邻三个地方，问至少需要多少快递员可以把快递送完。
// 例：输入：{1, 1,0,0,1,1,1,0,0,1}
// 输出：3
function kuaidiyuan(nums) {
    let count = 0, i = 0;
    while (i < nums.length) {
        if (nums[i] === 1) {
            count++;
            i += 3;
        } else {
            i++;
        }
    }
    return count;
}
let nums = [1, 1, 0, 0, 1, 1, 1, 0, 0, 1];
console.log(kuaidiyuan(nums));
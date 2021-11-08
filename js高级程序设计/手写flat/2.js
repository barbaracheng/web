/*
 * @Author: leyuans
 * @Date: 2021-10-25 17:22:13
 * @LastEditTime: 2021-10-25 21:33:53
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\js高级程序设计\手写flat\2.js
 */
function flatten(arr) {
    return arr.join(',').split(',').map(Number);
}
const arr = [1, 2, [3, 4, [5]], 6, [7, [8, [9]]]];
console.log(flatten(arr));
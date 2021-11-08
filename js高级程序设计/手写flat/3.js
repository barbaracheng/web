/*
 * @Author: leyuans
 * @Date: 2021-10-25 21:36:04
 * @LastEditTime: 2021-10-25 21:43:38
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\js高级程序设计\手写flat\3.js
 */
function flatten(arr) {
    return JSON.stringify(arr).replace(/\[|\]/g, "").split(",").map(Number);
}
const arr = [1, 2, [3, 4, [5]], 6, [7, [8, [9]]]];
console.log(flatten(arr));
// console.log(JSON.stringify(arr));
// console.log(JSON.stringify(arr).replace(/\[|\]/g, ""));
// console.log(JSON.stringify(arr).replace(/\[|\]/g, "").split(","));

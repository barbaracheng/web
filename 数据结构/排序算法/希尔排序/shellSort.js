/*
 * @Author: leyuans
 * @Date: 2021-05-15 10:26:11
 * @LastEditTime: 2021-10-27 11:38:58
 * @LastEditors: leyuans
 * @Description: 希尔排序算法
 * @FilePath: \web-projects\数据结构\排序算法\希尔排序\shellSort.js
 */


function shellSort(arr) {
  let len = arr.length;
  // 选取增量d为数组长度的一半
  let d = Math.floor(len / 2);
  while (d >= 1) {
    // 从d开始往后循环
    for (let i = d; i < len; i++) {
      // 记录当前元素
      let cur = arr[i], j = i - d;
      while (arr[j] > cur && j >= 0) {
        arr[j + d] = arr[j];
        j -= d;
      }
      arr[j + d] = cur;
    }
    // 缩小增量
    d = Math.floor(d / 2);
  }
  return arr;
}


/**
 * @description: 希尔排序
 * @param {arr}
 * @return {arr_cp.slice(1)}
 */

var shellSort1 = function (arr) {
  let arr_cp = [],
    d = Math.floor(arr.length / 2);
  //将arr赋值给arr_cp，下标从1开始，0用来做哨兵
  for (let i = 1; i <= arr.length; i++) {
    arr_cp[i] = arr[i - 1];
  }
  while (d >= 1) {
    for (let i = d + 1; i < arr_cp.length; i++) {
      arr_cp[0] = arr_cp[i];
      let j = i - d;
      while (j > 0 && arr_cp[0] < arr_cp[j]) {
        arr_cp[j + d] = arr_cp[j];
        j -= d;
      }
      arr_cp[j + d] = arr_cp[0];
    }
    d = Math.floor(d / 2);
  }
  return arr_cp.slice(1);
};


let arr = [9, 7, 4, 5, 0, 1, 3, 1, 2];
// console.log(shellSort1(arr));
shellSort(arr);
console.log(arr);
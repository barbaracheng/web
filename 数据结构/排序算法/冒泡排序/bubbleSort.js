/*
 * @Author: leyuans
 * @Date: 2021-05-15 14:38:11
 * @LastEditTime: 2021-10-27 09:46:11
 * @LastEditors: leyuans
 * @Description:
 * @FilePath: \web-projects\数据结构\排序算法\冒泡排序\bubbleSort.js
 */

/**
 * @description: 冒泡排序算法
 * @param {arr} 
 * @return {arr}
 */
// 每次排序找到最大的元素
var bubbleSort1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

// 每次排序找到最小的元素
function bubbleSort(arr) {
  let len = arr.length;
  // 外层循环为需要排序的次数
  for (let i = 1; i < len; i++) {
    // 内层循环从后往前走，当后一个比前一个小的时候交换
    for (let j = len - 1; j > i - 1; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    console.log(`第${i}趟排序：${arr}`);
  }
  return arr;
}


/**
 * @description: 改进的冒泡排序算法，设置一个交换标志，当某趟无交换时，说明这一部分数据已经有序，可以退出循环
 * @param {Array} arr
 * @return {Array} arr
 */
var improvedBubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swap = 1;
      }
    }
    console.log(`第${i + 1}趟排序：${arr}`);
    if (swap == 0) {
      break;
    }
  }
  return arr;
}
let arr = [9, 29, 2, 10, 30, 20, 8, 2, 3];
// let ans = improvedBubbleSort(arr);
let ans1 = bubbleSort(arr);
// console.log("未排序数组：", arr);
// console.log("排序后数组", ans);
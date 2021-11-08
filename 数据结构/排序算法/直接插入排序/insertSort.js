/*
 * @Author: leyuans
 * @Date: 2021-05-15 09:03:58
 * @LastEditTime: 2021-10-27 11:08:30
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\数据结构\排序算法\直接插入排序\insertSort.js
 */
let insertSort = function (arr) {
    let arr_cp = new Array(arr.length + 1);
    for (let i = 1; i < arr_cp.length; i++) {
        arr_cp[i] = arr[i - 1];  //将arr赋值给arr_cp，从1开始，0用来做哨兵
    }
    for (let i = 2; i < arr_cp.length; i++) {
        arr_cp[0] = arr_cp[i];
        let j = i - 1;
        while (arr_cp[0] < arr_cp[j]) { //为什么不用判断j是否会越界：因为有arr_cp[0]做哨兵，即当j==0时，这里的条件就不成立了
            arr_cp[j + 1] = arr_cp[j];
            j--;
        }
        arr_cp[j + 1] = arr_cp[0];
    }
    return arr_cp.slice(1);
}

/**
 * 
 * @param {} arr 
 * @returns arr
 */
function insertSort1(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i - 1, cur = arr[i]; // cur保存当前待插入的元素
        // 比较当前待插入元素和数组已有序部分元素的大小，找到待插入元素的位置
        while (cur < arr[j] && j >= 0) {
            // 将元素往后挪
            arr[j + 1] = arr[j];
            j--;
        }
        // 当循环退出的时候，说明找到了待插入元素的位置，待插入元素的下标为j+1
        arr[j + 1] = cur;
    }
    return arr;
}


let arr = [9, 7, 4, 5, 0, 1, 3, 1, 2];
insertSort(arr);
/*
 * @Author: leyuans
 * @Date: 2021-05-14 11:19:01
 * @LastEditTime: 2021-10-27 12:35:29
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\数据结构\排序算法\快速排序\quickSort.js
 */
//阮一峰老师的快排
// 思路：1、选择数组中间数作为基数，并从数组中取出此基数
// 2、准备两个数组容器，遍历数组，逐个与基数比对，较小的放左边容器，较大的放右边容器
// 3、递归处理两个容器的元素，并将处理后的元素与基数按大小进行合并

var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};


/**
 * @description: 快速排序。找一个元素作为基准，让它左边的数都小于或等于它，右边的数都大于或等于它。
 * 下面的实现方法是以数组第一个元素作为基准来划分的
 * @param {Array} arr
 * @param {Number} left
 * @param {Number} right
 * @return {Array} arr
 */
var quickSort1 = function (arr, left, right) {
    // 递归终止条件
    if (left >= right) {
        return arr;
    }
    let i = left, j = right, base = arr[left];
    while (i < j) {
        while (i < j && arr[j] >= base) {
            j--;
        }
        while (i < j && arr[i] <= base) {
            i++;
        }
        // 交换位置
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // 将当前i所指向的数字放到left所在位置
    arr[left] = arr[i];
    // 将base放到指定位置
    arr[i] = base;
    quickSort1(arr, left, i - 1);
    quickSort1(arr, i + 1, right);
    return arr;
}










/**
 * @description: 
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 * @return {}
 */
// 这个算法还有一些问题
var partition = function (arr, i, j) {
    arr[0] = arr[i]; //用arr[0]来存储当前的基准值
    while (i < j) {
        while (i < j && arr[j] >= arr[0]) {
            j--;
        }
        arr[i] = arr[j];
        while (i < j && arr[i] <= arr[0]) {
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = arr[0];
    return i;
}

var quickSort2 = function (arr, i, j) {
    if (i < j) {
        pivotIndex = partition(arr, i, j);
        quickSort2(arr, i, pivotIndex - 1);
        quickSort2(arr, pivotIndex + 1, j);
    }
    return arr.slice(1);
}

let arr = [9, 2, 10, 3, 1, 20, 10],
    arr_cp = [];
for (let i = 1; i < arr.length + 1; i++) {
    arr_cp[i] = arr[i - 1];
}
quickSort2(arr_cp, 1, arr_cp.length - 1);
console.log(arr);

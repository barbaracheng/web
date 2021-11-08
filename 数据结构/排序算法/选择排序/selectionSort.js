/*
 * @Author: leyuans
 * @Date: 2021-10-27 10:28:11
 * @LastEditTime: 2021-10-27 10:32:29
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\数据结构\排序算法\选择排序\selectionSort.js
 */
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i; // 保存最小值的下标
        for (let j = i; j < len; j++) {
            // 寻找最小值的下标
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 交换位置
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
let arr = [10, 3, 1, 8, 3, 4, 9, 2, 1, 5];
selectionSort(arr);
console.log(arr);
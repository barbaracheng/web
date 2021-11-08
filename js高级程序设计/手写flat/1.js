/*
 * @Author: leyuans
 * @Date: 2021-10-25 17:00:06
 * @LastEditTime: 2021-10-25 17:21:24
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\js高级程序设计\手写flat\1.js
 */
const arr = [1, 2, [3, 4, [5]], 6, [7, [8, [9]]]];

// 不指定扁平化的层级，全部都打平
function flatten(sourceArray, flattenedArray = []) {
    for (const element of sourceArray) {
        if (Array.isArray(element)) {
            flatten(element, flattenedArray);
        } else {
            flattenedArray.push(element);
        }
    }
    return flattenedArray;
}
console.log(flatten(arr));



// 可以指定扁平化的深度
function flatten1(sourceArray, depth, flattenedArray = []) {
    for (const element of sourceArray) {
        if (Array.isArray(element) && depth > 0) {
            flatten1(element, depth - 1, flattenedArray);
        } else {
            flattenedArray.push(element);
        }
    }
    return flattenedArray;
}
console.log(flatten1(arr, 1));

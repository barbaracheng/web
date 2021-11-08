"use strict";

//阮一峰老师的快排
// 思路：1、选择数组中间数作为基数，并从数组中取出此基数
// 2、准备两个数组容器，遍历数组，逐个与基数比对，较小的放左边容器，较大的放右边容器
// 3、递归处理两个容器的元素，并将处理后的元素与基数按大小进行合并
var quickSort = function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [],
      right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};

var quickSort1 = function quickSort1(arr, left, right) {
  if (left >= right) {
    return arr;
  }

  var i = left,
      j = right,
      base = arr[left];

  while (i < j) {
    while (i < j && arr[j] >= base) {
      j--;
    }

    while (i < j && arr[i] <= base) {
      i++;
    }

    if (i < j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  arr[left] = arr[i];
  arr[i] = base;
  quickSort1(arr, left, i - 1);
  quickSort1(arr, i + 1, right);
  return arr;
};
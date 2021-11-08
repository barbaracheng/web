"use strict";

var insertSort = function insertSort(arr) {
  var arr_cp = new Array(arr.length + 1);

  for (var i = 1; i < arr_cp.length; i++) {
    arr_cp[i] = arr[i - 1]; //将arr赋值给arr_cp，从1开始，0用来做哨兵
  }

  for (var _i = 2; _i < arr_cp.length; _i++) {
    arr_cp[0] = arr_cp[_i];
    var j = _i - 1;

    while (arr_cp[0] < arr_cp[j]) {
      //为什么不用判断j是否会越界：因为有arr_cp[0]做哨兵，即当j==0时，这里的条件就不成立了
      arr_cp[j + 1] = arr_cp[j];
      j--;
    }

    arr_cp[j + 1] = arr_cp[0];
  }

  return arr_cp.slice(1);
};

var arr = [9, 7, 4, 5, 0, 1, 3, 1, 2];
insertSort(arr);
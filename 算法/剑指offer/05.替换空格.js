/*
 * @Author: leyuans
 * @Date: 2021-11-04 10:14:32
 * @LastEditTime: 2021-11-04 10:20:37
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\05.替换空格.js
 */
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
/**
 * @param {string} s
 * @return {string}
 */
// 方法一：使用正则替换
var replaceSpace = function (s) {
    return s.replace(/\s/g, '%20');
};

// 方法二：由于字符串是不可变对象，所以不能直接在原字符串上进行修改；
// 新建一个空字符串，遍历字符串s，将字符串s中的字符添加到空字符串，遇到空格用20 % 替换
var replaceSpace = function (s) {
    let str = '';
    for (let ch of s) {
        if (ch !== ' ') {
            str += ch;
        } else {
            str += '%20';
        }
    }
    return str;
};

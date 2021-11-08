/*
 * @Author: leyuans
 * @Date: 2021-11-04 10:52:21
 * @LastEditTime: 2021-11-04 10:56:56
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\58.左旋转字符串.js
 */
/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 * 请定义一个函数实现字符串左旋转操作的功能。
 * 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
 */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    return s.slice(n) + s.slice(0, n);
};

var reverseLeftWords = function (s, n) {
    let ans = '';
    for (let i = n; i < s.length; i++) {
        ans += s[i];
    }
    for (let i = 0; i < n; i++) {
        ans += s[i];
    }
    return ans;
};
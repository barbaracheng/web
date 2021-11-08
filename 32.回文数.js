/*
 * @Author: leyuans
 * @Date: 2021-10-27 14:41:26
 * @LastEditTime: 2021-10-27 14:44:01
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\31.回文数.js
 */
function isPalindrome(x) {
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false;
    }
    let reversedNum = 0;
    while (x > reversedNum) {
        reversedNum = reversedNum * 10 + x % 10;
        x = x / 10;
    }
    return x === reversedNum || x === reversedNum / 10;
}

console.log(isPalindrome(100));
console.log(isPalindrome(101));
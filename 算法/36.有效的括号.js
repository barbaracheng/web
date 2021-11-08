/*
 * @Author: leyuans
 * @Date: 2021-10-29 10:41:34
 * @LastEditTime: 2021-10-29 10:45:54
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\36.有效的括号.js
 */
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let len = s.length;
    // 如果字符串长度为奇数，则肯定无效
    if (len % 2 !== 0) {
        return false;
    }
    const map = new Map([[")", "("], ["]", "["], ["}", "{"]]);
    let stack = [];
    // 遍历字符串，遇到左括号就压入栈中，遇到右括号时判断栈顶是否为与之相匹配的左括号
    for (const ch of s) {
        if (map.has(ch)) {
            if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    // 注意这里要判断栈是否为空，不为空则说明有括号不匹配，为空则说明括号全部匹配成功
    return !stack.length;
};
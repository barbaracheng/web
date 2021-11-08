/*
 * @Author: leyuans
 * @Date: 2021-11-08 08:38:01
 * @LastEditTime: 2021-11-08 09:12:46
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\剑指offer\50.第一个只出现一次的字符.js
 */
// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/

/**  
 * 遍历字符串，用哈希表存储各个字符出现的次数；
 * 然后再遍历一次字符串，在哈希表中找到第一个出现次数为1的字符
 */
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const map = new Map();
    for (const ch of s) {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        } else {
            map.set(ch, 1);
        }
    }
    for (const ch of s) {
        if (map.get(ch) === 1) {
            return ch;
        }
    }
    return ' ';
};

/**
 * 对于哈希映射中的每一个键值对，键表示一个字符，
 * 值表示它的首次出现的索引（如果该字符只出现一次）或者 -1（如果该字符出现多次）。
 * 当我们第一次遍历字符串时，设当前遍历到的字符为 c，如果 c 不在哈希映射中，
 * 我们就将 c 与它的索引作为一个键值对加入哈希映射中，否则我们将 c 在哈希映射中对应的值修改为 −1。
 * 
 * 在第一次遍历结束后，我们只需要再遍历一次哈希映射中的所有值，找出其中不为 -1 的最小值，
 * 即为第一个不重复字符的索引，然后返回该索引对应的字符。如果哈希映射中的所有值均为 -1，我们就返回空格。
 * @param {string} s 
 * @returns {character}
 */
var firstUniqChar = function (s) {
    const map = new Map();
    const n = s.length;
    for (const [i, ch] of Array.from(s).entries()) {
        if (map.has(ch)) {
            map.set(ch, -1);
        } else {
            map.set(ch, i);
        }
    }
    let first = n;
    for (let index of map.values()) {
        if (index !== -1 && index < first) {
            first = index;
        }
    }
    return first == n ? ' ' : s[first];
};


// 用数组记录字符出现的次数
var firstUniqChar = function (s) {
    const n = s.length;
    const count = new Array(26).fill(0);
    let index;
    for (const ch of s) {
        index = ch.charCodeAt() - 'a'.charCodeAt();
        count[index]++;
    }
    for (const ch of s) {
        index = ch.charCodeAt() - 'a'.charCodeAt();
        if (count[index] === 1) {
            return ch;
        }
    }
    return ' ';
};
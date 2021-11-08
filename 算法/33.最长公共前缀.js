/*
 * @Author: leyuans
 * @Date: 2021-10-27 15:12:04
 * @LastEditTime: 2021-10-27 15:57:59
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\33.最长公共前缀.js
 */
// 纵向扫描字符串
function longestCommonPrefix(strs) {
    if (strs === null || strs.length === 0) {
        return "";
    }
    let row = strs.length, col = strs[0].length;
    for (let i = 0; i < col; i++) {
        let ch = strs[0][i];
        // 从第二行开始
        for (let j = 1; j < row; j++) {
            // 如果已经走到某一行的结尾或者strs[j][i]的值跟strs[0][i]的值不相等，则说明已经找到最长公共前缀
            if (i === strs[j].length || strs[j][i] !== ch) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
}



// 横向扫描
function longestCommonPrefix(strs) {
    if (strs === null || strs.length === 0) {
        return "";
    }
    let prefix = strs[0], count = strs.length;
    // 从第二行开始
    for (let i = 1; i < count; i++) {
        prefix = lcp(prefix, strs[i]);
        // 如果在尚未遍历完所有的字符串时，最长公共前缀已经是空串，则
        // 最长公共前缀一定是空串，因此不需要继续遍历剩下的字符串，直接返回空串即可。
        if (!prefix) {
            break;
        }
    }
    return prefix;
    // 比较两个字符串，找到最长公共前缀
    function lcp(prefix, str) {
        let len = Math.min(prefix.length, str.length), index = 0;
        while (index < len && prefix[index] === str[index]) {
            index++;
        }
        return prefix.slice(0, index);
    }
}


let strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs));
strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
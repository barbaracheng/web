/*
 * @Author: leyuans
 * @Date: 2021-10-25 16:03:11
 * @LastEditTime: 2021-10-25 17:06:32
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\js高级程序设计\promise\async.js
 */
console.log('script start');
async function async1() {
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2 end');
    return Promise.resolve().then(() => {
        console.log('async2 end1');
    })
}
async1();

setTimeout(function () {
    console.log('setTimeout');
}, 0);

new Promise(resolve => {
    console.log('Promise');
    resolve();
}).then(() => {
    console.log('promise1');
}).then(() => {
    console.log('promise2')
})
console.log('script end');

// 输出
// script start
// async2 end
// Promise
// script end
// async2 end1
// promise1
// promise2
// async1 end
// setTimeout
/*
 * @Author: leyuans
 * @Date: 2021-10-26 21:04:14
 * @LastEditTime: 2021-10-26 21:22:24
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\js高级程序设计\this指向\1this.js
 */
var a = 2;
function test() {
    let obj = {
        getA: () => {
            // console.log(this);
            return this.a;
        },
        a: 1
    }
    return obj;
}
console.log(test().getA());
// 输出：2
// 箭头函数没有自己的this，要靠捕获它所在的上下文的this，
// 而此时离箭头函数最近的上下文是全局上下文，此时全局上下文window正好有一个a属性，所以输出2


let obj = {
    getA: function () {
        // console.log(this);
        return this.a;
    },
    a: 1
}
obj.getA();
// 输出：1
// 这里的this指向的是obj对象


var a = 2;
function test() {
    let obj = {
        getA: function () {
            // console.log(this);
            return this.a;
        },
        a: 1
    }
    return obj;
}
console.log(test().getA());
// 输出：1
// test()返回obj对象，然后再执行obj里面的getA()方法，此时this指向的是obj



// 闭包问题
var a = 2;
function test() {
    let a = 3;
    let obj = {
        getA: function () {
            console.log(this);
            return a;
        },
        a: 1
    }
    return obj;
}
console.log(test().getA());
// 输出：3
// this指向obj，getA()方法获取的是test()函数中的变量a，所以输出3
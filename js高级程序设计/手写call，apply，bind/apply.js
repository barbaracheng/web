// 用ES6之前的语法实现
Function.prototype.myapply = function(thisArg, argArray) {
    if(typeof this !== 'function') {
        throw new TypeError("What is trying to be bound is not callable.");
    }
    // 获取thisArg是否为null或undefined，如果是，则将thisArg置为window；否则包装thisArg，让它成为对象
    thisArg = thisArg ? Object(thisArg) : window;
    // 让this变成thisArg的属性，this为被调用的函数
    thisArg.fn = this;
    let res;
    if(!argArray){
        // 没有传参数
        res = thisArg.fn();
    }else {
        res = thisArg.fn(argArray);
    }
    delete thisArg.fn;
    return res;
}

// 用ES6的语法实现
Function.prototype.myapply1 = function(thisArg, argArray){
    if(typeof this !== 'function') {
        throw new TypeError("What is trying to be bound is not callable.");
    }
    // 获取thisArg是否为null或undefined，如果是，则将thisArg置为window；否则包装thisArg，让它成为对象
    thisArg = thisArg ? Object(thisArg) : window;
    // 让this变成thisArg的属性，this为被调用的函数
    thisArg.fn = this;
    let res;
    if(!argArray) {
        // 没有传参数
        res = thisArg.fn();
    }else {
        res = thisArg.fn(argArray);
    }
    delete thisArg.fn;
    return res;
}

var name = '时间跳跃';
var obj = {
    name: 'leyuan'
};

function f(a) {
    console.log(a.join('') + this.name);
}
f.myapply(obj,["我的", "名字", "是"]);
// f._apply('leyuan');
f.myapply1(obj,["我的", "名字", "是"]);
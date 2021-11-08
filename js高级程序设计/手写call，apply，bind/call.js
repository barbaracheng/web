//参考链接：https://www.cnblogs.com/echolun/p/12144344.html
// 模拟call方法
Function.prototype._call = function (thisArg) {
    if (typeof this !== "function") {
        throw new TypeError("What is trying to be bound is not callable.");
    }
    //判断传入的对象是否是null，undefined，如果是null，undefined就指向window
    thisArg = thisArg || window;
    // 让thisArg的属性为this（当前函数）
    thisArg.fn = this;
    // 保存参数
    let args = [];
    for (let i=1;i<arguments.length;i++) {
        args.push('arguments['+i+']');
    }
    // console.log(args);
    // 执行函数
    let res = eval('thisArg.fn('+args+')');
    // 删除属性
    delete thisArg.fn;
    // 返回执行结果
    return res;
}

// ES6实现call
Function.prototype.call_ = function (thisArg) {
    thisArg = thisArg || window;
    thisArg.fn = this;
    // 将arguments转换为数组
    let args = [...arguments].slice(1);
    // 使用扩展操作符将数组变成单个值
    let res = thisArg.fn(...args);
    delete thisArg.fn;
    return res;
}
var name = '时间跳跃';
var obj = {
    name: '听风是风'
};

function fn(a, b, c) {
    console.log(a + b + c + this.name);
}
fn._call(obj, "我的", "名字", "是"); // 我的名字是听风是风
// fn._call(null, "我的", "名字", "是"); // 我的名字是时间跳跃
// fn._call(undefined, "我的", "名字", "是"); // 我的名字是时间跳跃
fn.call_(obj,"我的", "名字", "是");
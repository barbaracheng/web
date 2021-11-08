// 实现一个add函数：add(1);//1 add(1)(2);//3 add(1)(2)(3);//6 add(1)(2)(3)(4);//10
// 版本一：只接受一个参数
function add(a) {
    let sum = function (b) {
        a = a + b;
        return sum;
    }
    sum.toString = function () {
        return a;
    }
    return sum;
}

// 方法二：可以接受多个参数
function add1() {
    let outerArgs = [...arguments];
    let sum = function () {
        let innerArgs = [...arguments];
        return add1.apply(null, outerArgs.concat(innerArgs));
    }
    sum.toString = function () {
        return outerArgs.reduce((pre,val)=>pre+val);
    }
    return sum;
}

// 方法三：参数长度不固定
function add2() {
    let outerArgs = [...arguments];
    let sum = function () {
        outerArgs = outerArgs.concat([...arguments]);
        return sum;
    }
    sum.toString = function () {
        return outerArgs.reduce((a,b)=>a+b);
    }
    return sum;
}


/*
 * @Author: leyuans
 * @Date: 2021-10-23 18:29:57
 * @LastEditTime: 2021-10-23 19:02:40
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\js高级程序设计\手写new操作符\myNew.js
 */
function myNew(fn, ...args) {
    // 创建一个新对象
    const obj = {};
    // 将新对象的__proto__属性指向构造函数的prototype
    obj.__proto__ = fn.prototype;
    // 执行构造函数（记得改变this指向）
    const result = fn.apply(obj, args);
    // 判断结果是否为非空对象
    return result instanceof Object ? result : obj;
}

// 上面函数的第一二步也可以合并为一步
function myNew1(fn, ...args) {
    const obj = Object.create(fn.prototype);
    const result = fn.apply(obj, args);
    return result instanceof Object ? result : obj;
}


//测试代码
let Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
    // return { name: 'person', age: 19 };
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = myNew(Person, "Greg", 27, "Doctor");
let person3 = myNew1(Person, "leyuan", 21, 'Software Engineer');
person1.sayName(); // Nicholas
person2.sayName(); // Greg
person3.sayName();
console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true 
console.log(person3 instanceof Object); // true
console.log(person3 instanceof Person); // true 
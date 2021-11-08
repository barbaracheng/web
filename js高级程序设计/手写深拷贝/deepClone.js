/*
 * @Author: leyuans
 * @Date: 2021-10-25 21:54:48
 * @LastEditTime: 2021-10-26 17:19:40
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\js高级程序设计\手写深拷贝\deepClone.js
 */
// 深拷贝简单实现
function deepClone(obj) {
    let cloneObj = Array.isArray(obj) ? [] : {};
    if (typeof obj === 'object' && obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && obj) {
                    cloneObj[key] = deepClone(obj[key]);
                } else {
                    cloneObj[key] = obj[key];
                }
            }
        }
    } else {
        return obj;
    }
    return cloneObj;
}

// 测试的obj对象
const obj = {
    // =========== 1.基础数据类型 ===========
    num: 0, // number
    str: '', // string
    bool: true, // boolean
    unf: undefined, // undefined
    nul: null, // null
    sym: Symbol('sym'), // symbol
    bign: BigInt(1n), // bigint

    // =========== 2.Object类型 ===========
    // 普通对象
    obj: {
        name: '我是一个对象',
        id: 1
    },
    // 数组
    arr: [0, 1, 2],
    // 函数
    func: function () {
        console.log('我是一个函数')
    },
    // 日期
    date: new Date(0),
    // 正则
    reg: new RegExp('/我是一个正则/ig'),
    // Map
    map: new Map().set('mapKey', 1),
    // Set
    set: new Set().add('set'),
    // =========== 3.其他 ===========
    [Symbol('1')]: 1  // Symbol作为key
};

// 4.添加不可枚举属性
Object.defineProperty(obj, 'innumerable', {
    enumerable: false,
    value: '不可枚举属性'
});

// 5.设置原型对象
Object.setPrototypeOf(obj, {
    proto: 'proto'
})

// 6.设置loop成循环引用的属性
// obj.loop = obj
let res = deepClone(obj);
console.log(res);
res.func();
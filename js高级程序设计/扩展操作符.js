//下列4种原生集合类型都定义了默认迭代器：
/*
* Array
* 所有定型数组
* Map
* Set
* */
/**
 * 基本类型在赋值时默认执行深拷贝
 * 引用类型在赋值时默认执行浅拷贝
 * @type {number[]}
 */
const test = Array.of(1, 2);
console.log("Array.of(1, 2):",test);
console.log("Int16Array.of(3,4):",Int16Array.of(3,4));
console.log("new Map([[5,6],[7,8]]):",new Map([[5,6],[7,8]]));
console.log("new Set([9,10]):",new Set([9,9,10,10]));
let iterableThings = [
    Array.of(1, 2),
    typedArr = Int16Array.of(3,4),
    new Map([[5,6],[7,8]]),
    new Set([9,10])
];
for (const iterableThing of iterableThings) {
    for (const x of iterableThing) {
        console.log(x);
    }
}


//所有这些类型都兼容扩展操作符。扩展操作符在对可迭代对象执行浅复制时特别有用，只是简单的语法就可以复制整个对象。
let arr1 = [1, [2, 3]];
let arr2 = [...arr1];
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);
arr1[0] = 4;
arr2[1] = 5;
console.log(arr1);
console.log(arr2);

/**
 * Map对象可以使用嵌套数组来进行初始化，例如：[[1, 2], [3, 4]]，
 * 初始化后的键为内层数组的第一个数，值为内层数组的第二个数
 * 同时也可以用一个Map对象初始化另一个Map对象
 */

let map1 = new Map([[1, 2], [3, 4]]);
let map2 = new Map(map1);
console.log(map1);
console.log(map2);
console.log(map1 === map2);// false

//...arr
let arr3 = [1, 2, 3];
let arr4 = [0, ...arr3, 4, 5];
console.log(arr4);

//浅复制意味着只会复制对象引用
let arr5 = [{}];
let arr6 = [...arr5];
arr5[0].foo = 'bar';
console.log(arr6[0]);

let arr7 = [1, 2, 3];

//把数组复制到定型数组
//Array.of()：参数为单个的值
//Array.from()：参数为类数组或数组
let typedArr1 = Int16Array.of(...arr7);
let typedArr2 = Int16Array.from(arr7);
console.log(typedArr1);
console.log(typedArr2);

//把数组复制到映射
let map = new Map(arr7.map((x) => [x, 'val' + x]));
console.log(map);

//把数组复制到集合
let set = new Set(typedArr2);
console.log(set);

//把集合复制回数组
let arr8 = [...set];
console.log(arr8);

//console.log(...arr7);
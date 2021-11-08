// const a = {
//     i: 1,
//     toString() {
//         return this.i++;
//     }
// }

// const a = {
//     i: 1,
//     valueOf () {
//         return this.i++;
//     }
// }

// const a = new Proxy({i : 1}, {
//     get(target) {
//         return () => target.i++;
//     }
// });



//宽松相等
if (a == 1 && a == 2 && a == 3) {
    console.log("宽松相等下的条件判断成立。");
}


/**
 *
 * 属性分为两种：数据属性和访问器属性
 * 1.数据属性
 * 数据属性包含一个保存数据值的位置，值会从这个位置读取，也会写入到这个位置。数据属性有以下4个特性来描述它们的行为。
 * [[Configurable]]: 表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
 * 性，以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特
 *性都是 true。
 * [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true
 * [[Writable]]：表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的这个特性都是 true
 * [[Value]]：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性的默认值为 undefined。
 * 使用Object.defineProperty()方法或者Object.defineProperties()方法可以修改属性的默认特性
 * 注意：一个属性的Configurable属性被设置为false之后，就不能在定义为true了
 * 在调用 Object.defineProperty()时，configurable、enumerable 和 writable 的值如果不指定，则都默认为 false。
 *
 * 2.访问器属性
 * 访问器属性不包含数据值。它们包含一个获取(getter)函数和一个设置(setter)函数，这两个函数不是必须的。
 * 在读取访问器属性时，会调用获取函数，这个函数的作用就是返回一个有效的值。
 * 在写入访问器属性时，会调用设置函数，这个函数必须决定对值做出什么修改。
 * 访问器属性有4个特性描述它们的行为。
 * [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
 * 性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。
 * [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对
 * 象上的属性的这个特性都是 true。
 * [[Get]]：获取函数，在读取属性时调用。默认值为 undefined。
 * [[Set]]：设置函数，在写入属性时调用。默认值为 undefined。
 * @type {number}
 */
let i = 1;
Object.defineProperty(window, "a", {
    get() {
        return i++;
    }
})

Object.defineProperty(window, "a", {
    get() {

    }
})
//严格相等
if (a === 1 && a === 2 && a === 3) {
    console.log("严格相等下的条件判断成立。");
}


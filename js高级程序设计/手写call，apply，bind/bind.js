//bind()接收的参数：第一个为this要指向的对象，其余的为参数
//bind()返回一个函数
Function.prototype._bind = function () {
    // 获取传入的参数
    const prevParams = Array.prototype.slice.call(arguments);
    // 获取执行上下文
    const context = prevParams.shift() || window;
    // 保存this
    const self = this;
    function bindFn() {
        const nextParams = Array.prototype.slice.call(arguments);
        const totalParams = prevParams.concat(nextParams);
        return self.apply(this instanceof self ? this : context, totalParams);
    }
    // bindFn.prototype = self.prototype; 使用寄生式继承替换掉原型链继承
    function Parasitic() {}
    Parasitic.prototype = self.prototype;
    bindFn.prototype = new Parasitic();
    return bindFn;
}

// MDN上实现的bind()函数
Function.prototype.bind1 = function (oThis) {
    // 判断调用bind的是否
    if (typeof this !== 'function') {
        throw new TypeError('What is trying to be bound is not callable');
    }
    // args保存函数参数，fToBind保存调用函数的this，
    let args = Array.prototype.slice.call(arguments,1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
            return fToBind.apply(this instanceof fNOP ? this : oThis,args.concat(Array.prototype.slice.call(arguments)));
        };
    // 使用寄生式继承使返回的fBound函数继承目标函数
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

Function.prototype.myBind = function (thisArg,...args) {
    if (typeof this !== 'function') {
        throw new TypeError('What is trying to be bound is not callable')
    }
    let fToBind = this,
        fNOP = function () {},
        fBound = function (...args1) {
            return fToBind.apply(this instanceof fNOP ? this : thisArg,args.concat(args1));
        };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

const obj = {
    name:'obj',
    age:21
}
var name = 'window',age = 20;
const Person = {
    name:'person',
    age:18,
    say: function (name,age) {
        console.log('this:',this)
        console.log('this.name:'+this.name, 'this.age:'+this.age,'name:',name,'age:',age);
    }
}

Person.say();
Person.say.bind()();
Person.say._bind()();
Person.say.bind1()();
Person.say.myBind()();
let f = Person.say.bind(obj);
f('bind');
new f();
let f1 = Person.say.bind1(obj);
f1('bind1');
new f1();
let f2 = Person.say._bind(obj);
f2('bind2');
new f2();
let f3 = Person.say.myBind(obj);
f3('bind3');
new f3();


/*
 * @Author: leyuans
 * @Date: 2021-10-14 11:02:01
 * @LastEditTime: 2021-10-14 11:08:25
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\25.两个栈实现一个队列.js
 */
/**
 * 用两个栈来实现一个队列，完成 n 次在队列尾部插入整数(push)和n次在队列头部删除整数(pop)的功能。
 *  队列中的元素为int类型。保证操作合法，即保证pop操作时队列内已有元素。
 */
// 用两个栈实现一个队列：其中一个栈只负责push操作，另一个栈负责pop
// pop时：当栈2不为空则直接弹出栈顶元素，若栈2为空则先将栈1的元素全部弹到栈2，然后再弹出栈2的栈顶元素
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    push(val) {
        this.stack1.push(val);
    }

    pop() {
        if (this.stack2.length) {
            return this.stack2.pop();
        } else {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
    }
}
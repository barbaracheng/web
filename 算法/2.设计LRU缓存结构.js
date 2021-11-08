/*
 * @Author: leyuans
 * @Date: 2021-09-24 18:45:29
 * @LastEditTime: 2021-09-24 20:01:16
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\算法\2.设计LRU缓存结构.js
 */
/**
 * 运用所掌握的数据结构，设计和实现一个  LRU (Least Recently Used，最近最少使用) 缓存机制 。
 * 实现 LRUCache 类：
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/OrIXps
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */
// 双向链表数据结构
let DLinkedNode = function (key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    // 哈希表+双向链表
    this.map = new Map();
    // 链表长度
    this.size = 0;
    // 伪头节点和伪尾节点
    this.head = new DLinkedNode();
    this.tail = new DLinkedNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    // 容量
    this.capacity = capacity;
};

// 添加到头节点
LRUCache.prototype.addToHead = function (node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}
// 移除节点
LRUCache.prototype.removeNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}
// 移动到头节点
LRUCache.prototype.moveToHead = function (node) {
    this.removeNode(node);
    this.addToHead(node);
}
// 移除尾节点并返回
LRUCache.prototype.removeTail = function () {
    let target = this.tail.prev;
    this.removeNode(target);
    return target;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        // key在缓存中，则通过哈希表定位，再移动到链表头部
        let node = this.map.get(key);
        this.moveToHead(node);
        return node.value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        // 取出节点，更新节点值
        let node = this.map.get(key);
        node.value = value;
        // 该节点为最近使用的节点，将其提到链表头
        this.moveToHead(node);
    } else {
        // 如果缓存中没有该key，则创建一个新节点
        let newNode = new DLinkedNode(key, value);
        // 添加至哈希表
        this.map.set(key, newNode);
        // 添加至链表头
        this.addToHead(newNode);
        ++this.size;
        // 判断链表长度是否大于capicity
        if (this.size > this.capacity) {
            // 如果超出容量，则移除链表尾部节点
            let tail = this.removeTail();
            // 删除哈希表中的映射
            this.map.delete(tail.key);
            // 更新链表长度
            --this.size;
        }
    }
};

// 牛客网题目：https://www.nowcoder.com/practice/e3769a5f49894d49b871c09cadd13a61?tpId=188&&tqId=38550&rp=1&ru=/ta/job-code-high-week&qru=/ta/job-code-high-week/question-ranking
// 第二种方法
/**
 * lru design
 * @param operators int整型二维数组 操作
 * @param k int整型 容量
 * @return int整型一维数组
 */
function LRU(operators, k) {
    let map = new Map(), result = [];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i][0] === 1) {
            // map中已经存在该key，说明其对应value需要更新         
            if (map.has(operators[i][1])) {
                map.delete(operators[i][1]);
            } else { //map已满，需要找到最久未访问的删除后，再添加新键值对
                if (map.size == k) {
                    // 取得map的迭代器
                    const iterator = map.entries();
                    // 取得map的第一个值
                    map.delete(iterator.next().value[0]);
                }
            }
            map.set(operators[i][1], operators[i][2]);
        } else {
            if (map.has(operators[i][1])) {
                //如果map中有需要查询的key，先保存其值再删除然后添加，可保证这次访问后该键值对为最新插入，不会在删除时误删
                let temp = map.get(operators[i][1]);
                map.delete(operators[i][1]);
                map.set(operators[i][1], temp)
                result.push(temp);
            } else {
                result.push(-1);
            }
        }
    }
    return result;
}
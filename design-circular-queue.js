/*
 * @Author      : linye
 * @Created At  : 2022-08-02 10:55:28
 * @Description : 622
 * https://leetcode.cn/problems/design-circular-queue/
 */

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.len = k;
  this.list = [];
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  this.list.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  this.list.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1;
  return this.list[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  return this.list[this.list.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.list.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.list.length === this.len;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

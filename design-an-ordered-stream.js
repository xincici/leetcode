/*
 * @Author      : linye
 * @Created At  : 2022-08-16 10:18:30
 * @Description : 1656
 * https://leetcode.cn/problems/design-an-ordered-stream/
 */

/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.data = {};
  this.ptr = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.data[idKey] = value;
  const res = [];
  let idx = this.ptr;
  while (true) {
    const val = this.data[idx];
    if (!val) break;
    res.push(val);
    idx++;
  }
  this.ptr = idx;
  return res;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

const opt = ["insert", "insert", "insert", "insert", "insert"]
const par = [[3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
const out = [[], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

const obj = new OrderedStream(5);
new Array(5).fill(1).forEach((v, idx) => {
  console.log(par[idx]);
  console.log(obj.insert(...par[idx]));
  console.log(out[idx]);
  console.log('====');
});

/*
 * @Author      : linye
 * @Created At  : 2022-08-24 10:40:39
 * @Description : 1460
 * https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 */

require('./log');

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  if (target.length !== arr.length) return false;
  const m = new Map();
  target.forEach(val => {
    m.set(val, (m.get(val) || 0) + 1);
  });
  for (let i = 0; i < arr.length; i++) {
    if (m.get(arr[i]) === undefined) return false;
    if (m.get(arr[i]) === 1) m.delete(arr[i]);
    else m.set(arr[i], m.get(arr[i]) - 1);
  }
  return m.size === 0;
};

const a1 = [3,4,2,5,1,6,9,7,8];
const a2 = [9,2,3,6,1,4,8,7,5];

log(a1, a2, canBeEqual)


/*
 * @Author      : linye
 * @Created At  : 2022-09-20 15:32:59
 * @Description : 496
 * https://leetcode.cn/problems/next-greater-element-i/
 */

require('./log');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = new Map();
  nums1.forEach((val, idx) => {
    map.set(val, idx);
  });
  let len = nums1.length;
  const res = new Array(len).fill(-1);
  const stack = [];
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      let val = stack.pop();
      if (map.has(val)) {
        res[map.get(val)] = nums2[i];
        len--;
        if (len === 0) return res;
      }
    }
    stack.push(nums2[i]);
  }
  return res;
};
const nums1 = [4,1,2], nums2 = [1,3,4,2]
log(nums1, nums2, nextGreaterElement)

/*
 * @Author      : linye
 * @Created At  : 2022-08-15 17:05:37
 * @Description : 503
 * https://leetcode.cn/problems/next-greater-element-ii/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const len = nums.length;
  if (len === 1) return [-1];
  const max = Math.max(...nums);
  const res = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] === max) {
      res[i] = -1;
      continue;
    }
    let j = (i + 1) % len;
    while (true) {
      if (nums[i] < nums[j]) {
        res[i] = nums[j];
        break;
      }
      j = (j + 1) % len;
    }
  }
  return res;
};

var fn2 = function(nums) {
  const n = nums.length;
  const res = [];
  const stack = [];
  for (let i = 2 * n - 1; i > -1; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }
    res[i % n] = stack.length ? stack[stack.length - 1] : -1;
    // 如果栈为空，且已经遍历够了 1 轮，证明当前是最大元素
    // 在此之前的肯定在第一轮时已获取到了正确的值，退出即可
    if (!stack.length && i < n) break;
    stack.push(nums[i % n]);
  }
  return res;
};

log([1,2,1], nextGreaterElements);
log([1,6,2,4,3,4,5,1], nextGreaterElements);
log([1,2,1], fn2);
log([1,6,2,4,3,4,5,1], fn2);

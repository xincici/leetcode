/*
 * @Author      : linye
 * @Created At  : 2022-09-20 19:52:59
 * @Description : 1911
 * https://leetcode.cn/problems/maximum-alternating-subsequence-sum/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  let max = -Infinity;
  const stack = [];
  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    if (!stack.length) {
      stack.push(nums[i]);
    } else if (nums[i] === stack[stack.length - 1]) {
      continue;
    } else if (!flag) {
      if (nums[i] > stack[stack.length - 1]) {
        stack[stack.length - 1] = nums[i];
      } else {
        stack.push(nums[i]);
        flag = !flag;
      }
    } else {
      if (nums[i] < stack[stack.length - 1]) {
        stack[stack.length - 1] = nums[i];
      } else {
        stack.push(nums[i]);
        flag = !flag;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < stack.length; i++) {
    if (i % 2 === 0) {
      sum += stack[i];
      max = Math.max(sum, stack[i]);
    } else {
      sum -= stack[i];
    }
  }
  return max;
};

log([4,2,5,3], maxAlternatingSum);
log([5,6,7,8], maxAlternatingSum);
log([6,2,1,2,4,5], maxAlternatingSum);

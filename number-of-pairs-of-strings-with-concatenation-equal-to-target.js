/*
 * @Author      : linye
 * @Created At  : 2022-07-29 16:24:58
 * @Description : 2023
 * https://leetcode.cn/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/
 */

require('./log');

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!target.startsWith(nums[i])) continue;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) res++;
    }
  }
  return res;
};

log(['777', '7', '77', '77'], '7777', numOfPairs);
log(['7', '7', '7'], '77', numOfPairs);

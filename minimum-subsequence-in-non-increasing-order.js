/*
 * @Author      : linye
 * @Created At  : 2022-08-04 12:28:12
 * @Description : 1403
 * https://leetcode.cn/problems/minimum-subsequence-in-non-increasing-order/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a);
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  let tmp = 0;
  for (let i = 0; i < nums.length; i++) {
    tmp += nums[i];
    if (tmp > sum - tmp) return nums.slice(0, i + 1);
  }
};

log([4,4,7,6,7], minSubsequence);

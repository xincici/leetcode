/*
 * @Author      : linye
 * @Created At  : 2022-07-28 11:49:47
 * @Description : 1567
 * https://leetcode.cn/problems/maximum-length-of-subarray-with-positive-product/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
  while (nums[0] === 0) {
    nums.shift();
  }
  const dp = [];
  let last = -1;
  if (nums[0] > 0) dp[0] = 1;
  else {
    dp[0] = 0;
    last = 0;
  }
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (cur === 0) {
      dp[i] = 0;
      last = -1;
      continue;
    }
    if (cur > 0) {
      dp[i] = dp[i - 1] + 1;
      continue;
    }
    if (last < 0) {
      dp[i] = 0;
      last = i;
      continue;
    }
    dp[i] = i - last + 1 + (dp[last - 1] || 0);
    last = i;
  }
  return Math.max.apply(null, dp);
};

log([-1, 0,1,-2,-3,-4, 5, -2, 3, -4, -3], getMaxLen);

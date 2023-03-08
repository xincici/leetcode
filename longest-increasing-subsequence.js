/*
 * @Author      : linye
 * @Created At  : 2022-07-21 19:59:38
 * @Description : 300
 * https://leetcode.cn/problems/longest-increasing-subsequence/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length <= 1) return nums.length;
  let res = 0;
  const dp = Array.from(nums, () => 1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

log([1,2,3,0,1,4], lengthOfLIS);
log([1,4,3,0,1,5], lengthOfLIS);

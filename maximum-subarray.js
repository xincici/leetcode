/*
 * @Author      : linye
 * @Created At  : 2022-08-01 11:14:34
 * @Description : 53
 * https://leetcode.cn/problems/maximum-subarray/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length;
  let res = last = nums[0];
  for (let i = 1; i < len; i++) {
    last = Math.max(last + nums[i], nums[i]);
    res = Math.max(res, last);
  }
  return res;
}

const nums = [-1, 4, -1, 2, 1, -5, 4];

log(nums, maxSubArray);

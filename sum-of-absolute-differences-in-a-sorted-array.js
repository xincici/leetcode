/*
 * @Author      : linye
 * @Created At  : 2022-08-25 14:30:07
 * @Description : 1685
 * https://leetcode.cn/problems/sum-of-absolute-differences-in-a-sorted-array/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const len = nums.length;
  const res = [];
  const sum = nums.reduce((s, c) => s + c, 0);
  res[0] = sum - nums[0] * len;
  let idx = 1;
  while (idx < len) {
    res[idx] = res[idx - 1] - (nums[idx] - nums[idx - 1]) * (len - idx - idx);
    idx++;
  }
  return res;
};

const arr = [1,2,3,5,7,9];
log(arr, getSumAbsoluteDifferences);


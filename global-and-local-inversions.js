/*
 * @Author      : linye
 * @Created At  : 2022-11-16 10:43:21
 * @Description : 775
 * https://leetcode.cn/problems/global-and-local-inversions/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
  const len = nums.length;
  if (len <= 2) return true;
  for (let i = 0; i < len; i++) {
    if (Math.abs(nums[i] - i) > 1) return false;
  }
  return true;
};

log([0,2,1], isIdealPermutation);
log([1,0,2], isIdealPermutation);
log([1,0,3,2,5,4,6], isIdealPermutation);

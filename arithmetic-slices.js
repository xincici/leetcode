/*
 * @Author      : linye
 * @Created At  : 2022-09-28 20:16:14
 * @Description : 413
 * https://leetcode.cn/problems/arithmetic-slices/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  if (nums.length <= 2) return 0;
  let res = 0;
  let diff = nums[1] - nums[0], start = 0, end = 1;
  while (end < nums.length) {
    if (end === nums.length - 1) {
      if (end - start >= 2) {
        res += (end - start - 1) * (end - start) / 2;
      }
      break;
    }
    if (nums[end + 1] - nums[end] === diff) {
      end++;
    } else {
      if (end - start >= 2) {
        res += (end - start - 1) * (end - start) / 2;
      }
      diff = nums[end + 1] - nums[end];
      start = end++;
    }
  }
  return res;
};

log([1,2,3,4,5,6,8,10], numberOfArithmeticSlices)

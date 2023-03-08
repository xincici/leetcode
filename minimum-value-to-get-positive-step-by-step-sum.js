/*
 * @Author      : linye
 * @Created At  : 2022-08-09 11:42:14
 * @Description : 141
 * https://leetcode.cn/problems/minimum-value-to-get-positive-step-by-step-sum/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let sum = min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = sum + nums[i];
    min = Math.min(sum, min);
  }
  if (min >= 0) return 1;
  return 1 - min;
};

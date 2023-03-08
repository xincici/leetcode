/*
 * @Author      : linye
 * @Created At  : 2022-08-26 09:50:54
 * @Description : 1464
 * https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};

var maxProduct_1 = function(nums) {
  let min = -Infinity, max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      [min, max] = [max, nums[i]];
    } else if (nums[i] > min) {
      min = nums[i];
    }
  }
  return (min - 1) * (max - 1);
}

log([2,3,1,5,6,9], maxProduct_1)

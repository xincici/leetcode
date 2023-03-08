/*
 * @Author      : linye
 * @Created At  : 2022-08-29 10:32:22
 * @Description : 1470
 * https://leetcode.cn/problems/shuffle-the-array/
 */

require('./log');

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let idx = i = 0, j = n;
  const res = [];
  while (i < n) {
    res[idx++] = nums[i++];
    res[idx++] = nums[j++];
  }
  return res;
};

const nums = [2,5,1,3,4,7], n = 3;

log(nums, n, shuffle)

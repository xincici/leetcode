/*
 * @Author      : linye
 * @Created At  : 2022-09-27 15:43:18
 * @Description : 1785
 * https://leetcode.cn/problems/minimum-elements-to-add-to-form-a-given-sum/
 */

require('./log');

/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum === goal) return 0;
  const diff = Math.abs(goal - sum);
  return Math.ceil(diff / limit);
};

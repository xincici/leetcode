/*
 * @Author      : linye
 * @Created At  : 2022-10-24 11:03:17
 * @Description : 915
 * https://leetcode.cn/problems/partition-array-into-disjoint-intervals/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
  let res = 1, m1 = m2 = nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
    m2 = Math.max(m2, nums[i]);
    if (nums[i] < m1) {
      res = i + 1;
      m1 = m2;
    }
  }
  return res;
};

log([5,0,3,8,6], partitionDisjoint)
log([1,1,0,6,5,12], partitionDisjoint)

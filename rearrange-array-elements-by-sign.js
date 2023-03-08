/*
 * @Author      : linye
 * @Created At  : 2022-07-25 11:13:54
 * @Description : 2149
 * https://leetcode.cn/problems/rearrange-array-elements-by-sign/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const len = nums.length;
  const res = [];
  let m = n = 0;
  let flag = true;
  let idx = 0;
  while (idx < len) {
    if (flag) {
      if (nums[m] > 0) {
        res[idx++] = nums[m];
        m++;
        flag = false;
      } else {
        m++;
      }
    } else {
      if (nums[n] < 0) {
        res[idx++] = nums[n];
        n++;
        flag = true;
      } else {
        n++;
      }
    }
  }
  return res;
};

const nums = [19,-26,-37,-10,-9,15,14,31];

log(nums, rearrangeArray);




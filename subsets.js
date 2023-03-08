/*
 * @Author      : linye
 * @Created At  : 2022-08-31 19:45:55
 * @Description : 78
 * https://leetcode.cn/problems/subsets/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const len = nums.length;
  const res = [];
  const cur = [];
  function backtrack(start) {
    res.push([...cur]);
    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i]);
      backtrack(i + 1);
      cur.pop();
    }
  }
  backtrack(0);
  return res;
};

log([1,2,3,4], subsets);

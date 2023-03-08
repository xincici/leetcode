/*
 * @Author      : linye
 * @Created At  : 2022-10-17 19:11:03
 * @Description : 491
 * https://leetcode.cn/problems/increasing-subsequences/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const len = nums.length;
  const set = new Set();
  const tmp = [];
  function backtrack(start) {
    if (tmp.length >= 2) {
      if (tmp.at(-1) < tmp.at(-2)) return;
      set.add(tmp.join(','));
    }
    for (let i = start; i < len; i++) {
      tmp.push(nums[i]);
      backtrack(i + 1);
      tmp.pop();
    }
  }
  backtrack(0);
  return Array.from(set).map(s => s.split(',').map(v => +v));
};

log([1,2,2,3,4], findSubsequences);
log([4,4,3,2,1], findSubsequences);

/*
 * @Author      : linye
 * @Created At  : 2022-11-18 10:12:03
 * @Description : 891
 * https://leetcode.cn/problems/sum-of-subsequence-widths/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function(nums) {
  const len = nums.length;
  if (len < 2) return 0;
  const MOD = 1e9 + 7;
  nums.sort((a, b) => a - b);
  const p = [1];
  for (let i = 1; i < len; i++) {
    p[i] = p[i - 1] * 2 % MOD;
  }
  let res = 0;
  for (let i = 0; i < len; i++) {
    res = (res + nums[i] * p[i]) % MOD;
    res = (res - nums[i] * p[len - i - 1]) % MOD;
  }
  return res;
};

log([2,1,3], sumSubseqWidths)

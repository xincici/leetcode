/*
 * @Author      : linye
 * @Created At  : 2022-07-22 13:53:44
 * @Description : 674
 * https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  const len = nums.length;
  if (len === 1) return 1;
  const res = [-1];
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      res.push(i);
    }
  }
  res.push(len - 1);
  let diff = 1;
  for (let i = 1; i < res.length; i++) {
    const nd = res[i] - res[i - 1];
    diff = Math.max(diff, nd);
  }
  return diff;
};

var fn = function(nums) {
  const len = nums.length;
  if (len === 1) return 1;
  const dp = Array.from(nums, () => 1);
  let res = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

var fn1 = function(nums) {
  const len = nums.length;
  if (len === 1) return 1;
  let res = tmp = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      tmp++;
    } else {
      tmp = 1;
    }
    res = Math.max(res, tmp);
  }
  return res;
};

const a1 = [1,2,5,4,7];
const a2 = [2,2,5,2,7];
log(a1, findLengthOfLCIS);
log(a2, findLengthOfLCIS);
log(a1, fn);
log(a2, fn);
log(a1, fn1);
log(a2, fn1);




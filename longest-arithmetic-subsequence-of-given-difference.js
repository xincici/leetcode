/*
 * @Author      : linye
 * @Created At  : 2022-08-09 16:33:51
 * @Description : 1218
 * https://leetcode.cn/problems/longest-arithmetic-subsequence-of-given-difference/
 */

require('./log');

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  if (arr.length <= 1) return 1;
  const dp = Array.from(arr, () => 1);
  let max = 1;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] - arr[j] === difference) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};

var s2 = function(arr, diff) {
  if (arr.length <= 1) return 1;
  const map = {};
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    const pre = arr[i] - diff;
    map[arr[i]] = (map[pre] || 0) + 1;
    max = Math.max(map[arr[i]], max);
  }
  return max;
};

log([1,5,7,8,5,3,4,2,1], -2, longestSubsequence);
log([1,3,5,7], 1, longestSubsequence);
log([1,5,7,8,5,3,4,2,1], -2, s2);
log([1,3,5,7], 1, s2);

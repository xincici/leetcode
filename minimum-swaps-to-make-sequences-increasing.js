/*
 * @Author      : linye
 * @Created At  : 2022-10-10 14:26:29
 * @Description : 801
 * https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/
 */

require('./log');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
  const len = nums1.length;
  const dp = Array.from(nums1, () => [Infinity, Infinity]);
  dp[0][0] = 0;
  dp[0][1] = 1;
  for (let i = 1; i < len; i++) {
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      dp[i][0] = dp[i - 1][0];
      dp[i][1] = dp[i - 1][1] + 1;
    }
    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      dp[i][0] = Math.min(dp[i][0], dp[i - 1][1]);
      dp[i][1] = Math.min(dp[i][1], dp[i - 1][0] + 1);
    }
  }
  return Math.min(...dp[len - 1]);
};

const nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9];
log(nums1, nums2, minSwap)

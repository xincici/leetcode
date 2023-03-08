/*
 * @Author      : linye
 * @Created At  : 2022-07-15 16:15:04
 * @Description : 2090
 * https://leetcode.cn/problems/k-radius-subarray-averages/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

require('./log');

var getAverages = function(nums, k) {
  const len = nums.length;
  const kk1 = 2 * k + 1;
  if (len < kk1) return new Array(len).fill(-1);
  const res = new Array(len).fill(-1);
  let tmp = 0;
  let idx = -1;
  for (let i = 0; i < kk1; i++) {
    tmp += nums[i];
  }
  for (let i = k; i < len - k; i++) {
    if (idx >= 0) {
      tmp = tmp - nums[idx] + nums[i + k];
    }
    res[i] = ~~(tmp / kk1);
    idx++;
  }
  return res;
};

log([7,4,3,9,1,8,5,2,6], 2, getAverages);

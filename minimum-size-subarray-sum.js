/*
 * @Author      : linye
 * @Created At  : 2022-08-16 18:41:18
 * @Description : 209
 * https://leetcode.cn/problems/minimum-size-subarray-sum/
 */

require('./log');

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let min = Infinity;
  let i = j = sum = 0;
  let flag = true;
  while (true) {
    if (j === nums.length) break;
    if (flag) sum += nums[j];
    if (sum < target) {
      j++;
      flag = true;
    } else {
      if (j === i) return 1;
      min = Math.min(min, j - i + 1);
      sum = sum - nums[i]; 
      i++;
      flag = false;
    }
  }
  return min === Infinity ? 0 : min;
};

log(7, [4,1,1,6,4,3], minSubArrayLen);
log(4, [5], minSubArrayLen);
log(11, [1,1,1,1,1,1], minSubArrayLen);

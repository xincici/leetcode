/*
 * @Author      : linye
 * @Created At  : 2022-07-22 17:23:29
 * @Description : 376
 * https://leetcode.cn/problems/wiggle-subsequence/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length <= 1) return nums.length;
  let res = 1;
  let last = nums[0];
  let change = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === last) continue;
    if (nums[i] > last) {
      if ([-1, false].includes(change)) {
        res++;
        change = true;
      }
    } else {
      if ([-1, true].includes(change)) {
        res++;
        change = false;
      }
    }
    last = nums[i];
  }
  return res;
};

log([1,7,4,9,2,5], wiggleMaxLength);
log([1,17,5,10,13,15,10,5,16,8], wiggleMaxLength);
log([1,2,3,4,5,6,7,8,9], wiggleMaxLength);
log([1,1,2,3,4,5,6,7,8,9], wiggleMaxLength);

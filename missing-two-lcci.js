/*
 * @Author      : linye
 * @Created At  : 2022-09-26 10:04:16
 * @Description : 17.19
 * https://leetcode.cn/problems/missing-two-lcci/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function(nums) {
  nums.push(0);
  nums.push(0);
  const len = nums.length;
  let sum = 0;
  nums.forEach(v => sum += v);
  let diff = (1 + len) * len / 2 - sum;
  let half = ~~(diff / 2);
  sum = 0;
  nums.forEach(v => {
    if (v <= half) sum += v;
  });
  let res = (1 + half) * half / 2 - sum;
  return [res, diff - res];
};

log([1], missingTwo);
log([1,2,3,5,6,7,9], missingTwo);

/*
 * @Author      : linye
 * @Created At  : 2022-11-14 14:28:46
 * @Description : 805
 * https://leetcode.cn/problems/split-array-with-same-average/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
  if (nums.length === 1) return false;
  const len = nums.length;
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < len; i++) {
    nums[i] = nums[i] * len - sum;
    if (nums[i] === 0) return true;
  }
  console.log({nums})
  const half = len >> 1;
  const map = new Map();
  let res = false;
  function backtrack(total, start, finish, flag) {
    if (res) return;
    if (total === 0 && start !== 0 && start !== half + 1) return res = true;
    if (flag && map.has(-total)) return res = true;
    if (!flag && total !== 0) map.set(total, 1);
    for (let i = start; i < finish; i++) {
      total += nums[i];
      backtrack(total, i + 1, finish, flag);
      total -= nums[i];
    }
  }
  backtrack(0, 0, half, false);
  backtrack(0, half + 1, len, true);
  return res;
};

log([1,2,3,4,5,11], splitArraySameAverage)
log([18,0,13,5], splitArraySameAverage)

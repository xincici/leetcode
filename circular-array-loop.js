/*
 * @Author      : linye
 * @Created At  : 2022-08-11 19:11:29
 * @Description : 457
 * https://leetcode.cn/problems/circular-array-loop/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  const len = nums.length;
  if (len <= 1) return false;
  const tmp = new Set([]);
  let res = false;
  for (let i = 0; i < len; i++) {
    if (tmp.has(i)) continue;
    let flag = nums[i] > 0;
    let j = i;
    const inner = new Set([]);
    while (true) {
      if (inner.has(j)) return true;
      if (tmp.has(j)) break;
      const val = nums[j];
      if (val > 0 !== flag) break;
      tmp.add(j);
      inner.add(j);
      const t = j;
      j = (j + val) % len;
      if (j < 0) j += len;
      if (j === t) break;
    }
  }
  return res;
};

log([2,-1,1,2,2], circularArrayLoop)
log([-1,2], circularArrayLoop)
log([-2,1,-1,-2,-2], circularArrayLoop)

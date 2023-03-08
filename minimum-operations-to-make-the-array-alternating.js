/*
 * @Author      : linye
 * @Created At  : 2022-09-08 20:19:22
 * @Description : 2170
 * https://leetcode.cn/problems/minimum-operations-to-make-the-array-alternating/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  const len = nums.length;
  if (len < 2) return 0;
  const odd = {}, even = {};
  let o1 = o2 = e1 = e2 = 0;
  let lo, le;
  for (let i = 0; i < len; i++) {
    const v = nums[i];
    if (i % 2 === 0) {
      even[v] = (even[v] || 0) + 1;
      if (even[v] >= e1) {
        [e1, e2] = [even[v], le === v ? e2 : e1];
        le = v;
      } else if (even[v] > e2) {
        e2 = even[v];
      }
    } else {
      odd[v] = (odd[v] || 0) + 1;
      if (odd[v] >= o1) {
        [o1, o2] = [odd[v], lo === v ? o2 : o1];
        lo = v;
      } else if (odd[v] > o2) {
        o2 = odd[v];
      }
    }
  }
  console.log({o1, o2, e1, e2, lo, le})
  if (lo !== le) return len - o1 - e1;
  return len - Math.max(o1 + e2, o2 + e1);
};

log([2,2], minimumOperations)

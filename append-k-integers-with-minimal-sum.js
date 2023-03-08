/*
 * @Author      : linye
 * @Created At  : 2022-10-14 17:59:23
 * @Description : 2195
 * https://leetcode.cn/problems/append-k-integers-with-minimal-sum/
 */

require('./log');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function(nums, k) {
  nums = Array.from(new Set(nums));
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let cnt = res = idx = 0;
  let i = 1;
  while (true) {
    console.log({cnt, res, idx})
    if (idx >= len) {
      let v1 = nums.at(-1) + 1;
      let v2 = nums.at(-1) + k - cnt;
      return res + (v1 + v2) * (v2 - v1 + 1) / 2;
    }
    if (nums[idx] === i) {
      idx++;
      i++;
      continue;
    }
    res += i;
    cnt++;
    i++;
    if (cnt === k) return res;
  }
  return res;
};

const n1 = [1,3,3,3,4,10]
const n2 = [5,6];
log(n1, 20, minimalKSum);
// log(n2, 6, minimalKSum);

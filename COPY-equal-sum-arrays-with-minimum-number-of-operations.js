/*
 * @Author    : linye
 * @Created At  : 2022-12-07 13:00:39
 * @Description : 1775
 * https://leetcode.cn/problems/equal-sum-arrays-with-minimum-number-of-operations/
 */

require('./log');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
  const n = nums1.length, m = nums2.length;
  if (6 * n < m || 6 * m < n) {
    return -1;
  }
  const cnt1 = new Array(7).fill(0);
  const cnt2 = new Array(7).fill(0);
  let diff = 0;
  for (const i of nums1) {
    ++cnt1[i];
    diff += i;
  }
  for (const i of nums2) {
    ++cnt2[i];
    diff -= i;
  }
  if (diff === 0) {
    return 0;
  }
  if (diff > 0) {
    return help(cnt2, cnt1, diff);
  }
  return help(cnt1, cnt2, -diff);
}

const help = (h1, h2, diff) => {
  const h = new Array(7).fill(0);
  for (let i = 1; i < 7; ++i) {
    h[6 - i] += h1[i];
    h[i - 1] += h2[i];
  }
  let res = 0;
  for (let i = 5; i > 0 && diff > 0; --i) {
    let t = Math.min(Math.floor((diff + i - 1) / i), h[i]);
    res += t;
    diff -= t * i;
  }
  return res;
};


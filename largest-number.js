/*
 * @Author      : linye
 * @Created At  : 2022-10-27 20:02:53
 * @Description : 179
 * https://leetcode.cn/problems/largest-number/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => {
    const sa = String(a) + String(b);
    const sb = String(b) + String(a);
    if (sa === sb) return 0;
    let idx = 0;
    while (idx < sa.length) {
      if (sa[idx] < sb[idx]) return 1;
      if (sa[idx] > sb[idx]) return -1;
      idx++;
    }
  });
  console.log(nums)
  return nums.join('');
};

log([32,3,34343,34], largestNumber)
log([32,3], largestNumber)

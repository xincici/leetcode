/*
 * @Author      : linye
 * @Created At  : 2022-08-26 10:48:45
 * @Description : 2364
 * https://leetcode.cn/problems/count-number-of-bad-pairs/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
  const len = nums.length;
  let res = (len - 1) * len / 2;
  const tmp = {};
  for (let i = 0; i < len; i++) {
    const diff = nums[i] - i;
    if (tmp[diff]) {
      res = res - tmp[diff];
      tmp[diff]++;
    } else tmp[diff] = 1;
  }
  return res;
};

console.log(countBadPairs([1,2,3,4,5]));
console.log(countBadPairs([4,1,3,3]));

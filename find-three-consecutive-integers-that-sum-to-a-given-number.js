/*
 * @Author      : linye
 * @Created At  : 2022-09-06 19:36:26
 * @Description : 2177
 * https://leetcode.cn/problems/find-three-consecutive-integers-that-sum-to-a-given-number/
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
  if (num % 3 !== 0) return [];
  const mid = num / 3;
  return [mid - 1, mid, mid + 1];
};

/*
 * @Author      : linye
 * @Created At  : 2022-10-08 17:44:26
 * @Description : 377
 * https://leetcode.cn/problems/combination-sum-iv/
 */

require('./log');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  nums.sort((a, b) => a - b);
  const map = new Map();
  function inner(val) {
    if (map.has(val)) return map.get(val);
    if (val < nums[0]) return 0;
    const tmp = nums.reduce((acc, cur) => {
      return acc + inner(val - cur) + (nums.includes(val - cur) ? 1 : 0);
    }, 0);
    map.set(val, tmp);
    return tmp;
  }
  return inner(target) + (nums.includes(target) ? 1 : 0);
};

log([1,2,3], 32, combinationSum4)

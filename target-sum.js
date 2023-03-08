/*
 * @Author      : linye
 * @Created At  : 2022-11-01 16:51:04
 * @Description : 494
 * https://leetcode.cn/problems/target-sum/
 */

require('./log');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var s1 = function(nums, target) {
  const len = nums.length;
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  if (total < target) return 0;
  if ((total - target) % 2 !== 0) return 0;
  let res = 0;
  const map = new Map();
  function backtrack(start) {
    let tmp = total;
    for (let idx of map.keys()) {
      tmp -= 2 * nums[idx];
      if (tmp < target) return;
    }
    if (tmp === target) res++;
    for (let i = start; i < len; i++) {
      map.set(i, 1);
      backtrack(i + 1);
      map.delete(i);
    }
  }
  backtrack(0);
  return res;
};

var findTargetSumWays = function(nums, target) {
  const len = nums.length;
  let res = 0;
  function backtrack(sum, idx) {
    if (idx === len) {
      if (sum === target) res++;
      return;
    }
    backtrack(sum + nums[idx], idx + 1);
    backtrack(sum - nums[idx], idx + 1);
  }
  backtrack(0, 0);
  return res;
};

const n1 = [1,1,1,1,1];
const n2 = [50,37,6,20,35,41,45,3,20,36,49,1,20,10,43,4,44,15,44,34]
log(n2, 25, findTargetSumWays)

/*
 * @Author      : linye
 * @Created At  : 2022-10-26 10:19:30
 * @Description : 862
 * https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/
 */

require('./log');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  const len = nums.length;
  const sum = [0];
  for (let i = 0; i < len; i++) {
    if (nums[i] >= k) return 1;
    sum[i + 1] = sum[i] + nums[i];
  }
  let res = Infinity;
  const queue = [];
  for (let i = 0; i <= len; i++) {
    const cur = sum[i];
    while (queue.length && cur - sum[queue[0]] >= k) {
      res = Math.min(res, i - queue.shift());
    }
    while (queue.length && cur <= sum[queue.at(-1)]) {
      queue.pop();
    }
    queue.push(i);
  }
  return res === Infinity ? -1 : res;
};

log([2,-1,2], 3, shortestSubarray)
log([1,2], 4, shortestSubarray)
log([1], 1, shortestSubarray)

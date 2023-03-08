/*
 * @Author      : linye
 * @Created At  : 2022-07-13 17:53:03
 * @Description : 2289
 * https://leetcode.cn/problems/steps-to-make-array-non-decreasing/
 */

/*
给你一个下标从 0 开始的整数数组 nums 。在一步操作中，移除所有满足 nums[i - 1] > nums[i] 的 nums[i] ，其中 0 < i < nums.length 。
重复执行步骤，直到 nums 变为 非递减 数组，返回所需执行的操作数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

require('./log');

var totalSteps = function(nums) {
  if (nums.length <= 1) return 0;
  let res = 0;
  let flag = false;
  function inner() {
    if (nums.length <= 1) return;
    let i = nums.length - 1, j = i - 1;
    while (true) {
      if (j < 0) break;
      if (nums[i] === null) {
        i--;
        j--;
        continue;
      }
      if (nums[j] === null) {
        j--;
        continue;
      }
      if (nums[i] < nums[j]) {
        flag = true;
        nums[i] = null;
      }
      i = j;
      j--;
    }
    if (flag) {
      res++;
      flag = false;
      inner();
    }
  }
  inner();
  return res;
};

log([5,3,4,4,7,3,6,11,8,5,11], totalSteps);


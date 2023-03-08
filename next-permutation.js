/*
 * @Author      : linye
 * @Created At  : 2022-08-08 16:00:37
 * @Description : 31
 * https://leetcode.cn/problems/next-permutation/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = function(arr, i, j) {
  while (i < j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
};

var nextPermutation = function(nums) {
  if (nums.length === 1) return;
  let idx, tmp;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      idx = i - 1;
      tmp = nums[i - 1];
      break;
    }
  }
  if (!idx && idx !== 0) {
    swap(nums, 0, nums.length - 1);
    return nums;
  }
  let k = nums.length - 1;
  for (; k > idx; k--) {
    if (nums[k] > tmp) break;
  }
  nums[idx] = nums[k];
  nums[k] = tmp;
  swap(nums, idx + 1, nums.length - 1);
  return nums;
};

log([1,2,4,5,6,8,7,6], nextPermutation);
log([1,3,2], nextPermutation);

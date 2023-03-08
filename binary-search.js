/*
 * @Author      : linye
 * @Created At  : 2022-08-16 16:35:12
 * @Description : 704
 * https://leetcode.cn/problems/binary-search/
 */

require('./log');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  if (nums[left] > target || nums[right] < target) return -1;
  while (left <= right) {
    console.log({ left, right })
    const middle = ~~((right - left) / 2) + left;
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

var search_1 = function(nums, target) {
  function inner(left, right) {
    console.log({ left, right })
    if (right - left <= 1) {
      if (nums[left] === target) return left;
      if (nums[right] === target) return right;
      return -1;
    }
    const middle = ~~((right - left) / 2) + left;
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) return inner(middle + 1, right);
    return inner(left, middle - 1);
  }
  return inner(0, nums.length - 1);
};

log([-1,0,3,5,9,12,13,16,19,20,23,25], 9, search);
log([-1,0,3,5,9,12,13,16,19,20,23,25], 2, search);
log([-1,0,3,5,9,12,13,16,19,20,23,25], 39, search_1);

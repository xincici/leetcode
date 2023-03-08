/*
 * @Author      : linye
 * @Created At  : 2022-11-09 17:19:00
 * @Description : 35
 * https://leetcode.cn/problems/search-insert-position/
 */

require('./log');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1, mid;
  while (left < right) {
    mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return nums[left] < target ? left + 1 : left;
};

log([1,2,3,5,6,7], 4, searchInsert)
log([1,2,4,5,6,7], 4, searchInsert)
log([1,2,4,5,6,7], 8, searchInsert)
log([1], 8, searchInsert)

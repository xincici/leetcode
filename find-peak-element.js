/*
 * @Author      : linye
 * @Created At  : 2022-08-24 16:32:19
 * @Description : 162
 * https://leetcode.cn/problems/find-peak-element/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0;
  function inner(i, j) {
    if (i + 1 === j) return [i, j];
    if (nums[i] >= nums[j]) return inner(i, j - ((j - i) >> 1));
    if (nums[i] < nums[j]) return inner(i + ((j - i) >> 1), j);
  }
  let [i, j] = inner(0, nums.length - 1);
  while (true) {
    if (nums[i] > nums[j]) {
      if (i === 0) return i;
      if (nums[i] > nums[i - 1]) return i;
      i--;
      j--;
    }
    if (nums[j] > nums[i]) {
      if (j === nums.length - 1) return j;
      if (nums[j] > nums[j + 1]) return j;
      i++;
      j++;
    }
  }
};

log([1,2,3,4,5,2,1], findPeakElement)
log([1,2,8,7,6,2,1], findPeakElement)

const arr = new Array(20).fill(1).map((v, idx) => idx);
log(arr.sort(() => 0.5 - Math.random()), findPeakElement)
log(arr.sort(() => 0.5 - Math.random()), findPeakElement)

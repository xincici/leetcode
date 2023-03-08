/*
 * @Author      : linye
 * @Created At  : 2022-10-08 11:11:26
 * @Description : 870
 * https://leetcode.cn/problems/advantage-shuffle/
 */

require('./log');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  const res = [];
  function inner(v) {
    if (v < nums1[0] || v >= nums1.at(-1)) return 0;
    let i = 0, j = nums1.length - 1;
    while (i < j) {
      if (i + 1 === j) {
        if (nums1[i] > v) return i;
        return j;
      }
      let mid = (i + j) >> 1;
      if (nums1[mid] === v) {
        while (nums1[mid] === v) {
          mid++;
        }
        return mid;
      }
      if (nums1[mid] > v) {
        j = mid;
      } else {
        i = mid;
      }
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    const n = nums2[i];
    const idx = inner(n);
    res.push(nums1[idx]);
    nums1.splice(idx, 1);
  }
  return res;
};

const nums1 = [2,7,11,15], nums2 = [1,10,4,11];
log(nums1, nums2, advantageCount)

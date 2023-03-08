/*
 * @Author      : linye
 * @Created At  : 2022-10-13 13:56:18
 * @Description : 769
 * https://leetcode.cn/problems/max-chunks-to-make-sorted/
 */

require('./log');

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let res = max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) res++;
  }
  return res;
};

log([4,3,2,1,0], maxChunksToSorted)
log([0,1,2,3,4], maxChunksToSorted)

/*
 * @Author      : linye
 * @Created At  : 2022-09-14 10:50:47
 * @Description : 1619
 * https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0, len = arr.length;
  for(let i = len / 20; i < len / 20 * 19; i++) {
    sum += arr[i];
  }
  return sum / (len / 10 * 9);
};

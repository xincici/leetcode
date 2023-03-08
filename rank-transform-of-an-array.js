/*
 * @Author      : linye
 * @Created At  : 2022-07-28 10:13:00
 * @Description : 1331
 * https://leetcode.cn/problems/rank-transform-of-an-array/
 */

require('./log');

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  if (!arr.length) return [];
  const narr = Array.from(new Set(arr));
  narr.sort((a, b) => a - b);
  return Array.from(arr, item => {
    return narr.indexOf(item) + 1;
  });
};

log([40, 20, 40, 60, 10, 30], arrayRankTransform);

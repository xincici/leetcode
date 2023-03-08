/*
 * @Author      : linye
 * @Created At  : 2022-07-18 17:48:22
 * @Description : 2078
 * https://leetcode.cn/problems/two-furthest-houses-with-different-colors/
 */

/**
 * @param {number[]} colors
 * @return {number}
 */

require('./log');

var maxDistance = function(colors) {
  let res = 0;
  for (let i = 0; i < colors.length; i++) {
    if (colors.length - i <= res) break;
    for (let j = colors.length - 1; j > i; j--) {
      if (j - i <= res) break;
      if (colors[i] !== colors[j]) {
        res = Math.max(res, j - i);
        break;
      }
    }
  }
  return res;
};

log([1,1,1,6,1,1,1], maxDistance);

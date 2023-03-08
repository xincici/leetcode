/*
 * @Author      : linye
 * @Created At  : 2022-07-22 16:56:31
 * @Description : 455
 * https://leetcode.cn/problems/assign-cookies/
 */

require('./log');

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  let gi = si = 0;
  while (true) {
    if (gi >= g.length || si >= s.length) break;
    if (s[si] >= g[gi]) {
      res++;
      gi++;
    }
    si++;
  }
  return res;
};

log([5,4,3], [1,2], findContentChildren);
log([3,4,6], [1,1,3,4,5], findContentChildren);

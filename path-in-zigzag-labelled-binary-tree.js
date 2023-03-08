/*
 * @Author      : linye
 * @Created At  : 2022-08-04 19:07:53
 * @Description : 1104
 * https://leetcode.cn/problems/path-in-zigzag-labelled-binary-tree/
 */

require('./log');

/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  if (label === 1) return [1];
  if (label <= 3) return [1, label];
  const level = Math.ceil(Math.log2(label + 1));
  const res = [label];
  let direction = Boolean((level - 1) % 2);
  let left = direction ? label - Math.pow(2, level - 1) + 1 : Math.pow(2, level) - label;
  for(let i = level - 1; i > 0; i--) {
    const right = direction ? Math.pow(2, i) - 1 : Math.pow(2, i - 1);
    const half = Math.ceil(left / 2);
    if (direction) {
      res.unshift(right - half + 1);
    } else {
      res.unshift(right + half - 1);
    }
    left = half;
    direction = !direction;
  }
  return res;
};

log(5, pathInZigZagTree);
log(6, pathInZigZagTree);
log(14, pathInZigZagTree);
log(23, pathInZigZagTree);
// log(100, pathInZigZagTree);

/*
 * @Author      : linye
 * @Created At  : 2022-09-15 13:52:04
 * @Description : 96
 * https://leetcode.cn/problems/unique-binary-search-trees/
 */

require('./log');

/**
 * @param {number} n
 * @return {number}
 */
const map = new Map();
var numTrees = function(n) {
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;
  if (map.get(n)) return map.get(n);
  for (let i = 3; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      sum += numTrees(j - 1) * numTrees(i - j);
    }
    map.set(i, sum);
  }
  return map.get(n);
};

log(4, numTrees);
log(5, numTrees);
log(8, numTrees);

/*
 * @Author      : linye
 * @Created At  : 2022-09-20 18:27:58
 * @Description : 931
 * https://leetcode.cn/problems/minimum-falling-path-sum/
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const n = matrix.length;
  let res = matrix[0];
  function getMin(i) {
    let min = Infinity;
    for (let s = i - 1; s <= i + 1; s++) {
      if (s < 0 || s >= n) continue;
      if (res[s] < min) min = res[s];
    }
    return min;
  }
  for (let row = 1; row < n; row++) {
    let line = matrix[row];
    for (let col = 0; col < n; col++) {
      line[col] = getMin(col) + line[col];
    }
    res = line;
  }
  return Math.min(...res);
};


/*
 * @Author      : linye
 * @Created At  : 2022-08-31 11:27:58
 * @Description : 1314
 * https://leetcode.cn/problems/matrix-block-sum/
 */

require('./log');

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  if (k === 0) return mat;
  const m = mat.length, n = mat[0].length;
  if (k >= m - 1 && k >= n - 1) {
    const sum = mat.reduce((s, c) => {
      return s + c.reduce((ss, cc) => ss + cc, 0);
    }, 0);
    return new Array(m).fill(new Array(n).fill(sum));
  }
  const rows = Array.from({length: m}, () => []);
  for (let i = 0; i < m; i++) {
    let tmp = 0;
    for (let j = 0; j < n + k; j++) {
      if (j < k) {
        tmp += (mat[i][j] || 0);
        continue;
      }
      tmp += mat[i][j] || 0;
      if (j >= 2 * k + 1) {
        tmp -= mat[i][j - 2 * k - 1];
      }
      rows[i][j - k] = tmp;
    }
  }
  const res = Array.from({length: m}, () => []);
  for (let i = 0; i < n; i++) {
    let tmp = 0;
    for (let j = 0; j < m + k; j++) {
      if (j < k) {
        tmp += (j >= m ? 0 : rows[j][i]);
        continue;
      }
      tmp += (j >= m ? 0 : rows[j][i]);
      if (j >= 2 * k + 1) {
        tmp -= rows[j - 2 * k - 1][i];
      }
      res[j - k][i] = tmp;
    }
  }
  return res;
};

const mat = [[1,2,3,4,5,6,7]]
log(mat, 2, matrixBlockSum)

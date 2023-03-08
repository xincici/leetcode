/*
 * @Author      : linye
 * @Created At  : 2022-09-30 09:42:48
 * @Description : 01.08
 * https://leetcode.cn/problems/zero-matrix-lcci/
 */

require('./log');

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const row = matrix.length, col = matrix[0].length;
  const mrow = new Map();
  const mcol = new Map();
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        mrow.set(i, 1);
        mcol.set(j, 1);
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mrow.has(i) || mcol.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};

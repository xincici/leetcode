/*
 * @Author      : linye
 * @Created At  : 2022-10-11 16:52:01
 * @Description : 304
 * https://leetcode.cn/problems/range-sum-query-2d-immutable/
 */

require('./log');

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.sums = Array.from(matrix, () => []);
  this.sums[0][0] = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) this.sums[0][j] = this.sums[0][j - 1] + matrix[0][j];
      else if (j === 0) this.sums[i][0] = this.sums[i - 1][0] + matrix[i][0];
      else {
        this.sums[i][j] = this.sums[i - 1][j] + this.sums[i][j - 1] - this.sums[i - 1][j - 1] + matrix[i][j];
      }
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (row1 === 0 && col1 === 0) return this.sums[row2][col2];
  if (row1 === 0) return this.sums[row2][col2] - this.sums[row2][col1 - 1];
  if (col1 === 0) return this.sums[row2][col2] - this.sums[row1 - 1][col2];
  return this.sums[row2][col2] + this.sums[row1 - 1][col1 - 1] - this.sums[row2][col1 - 1] - this.sums[row1 - 1][col2];
};


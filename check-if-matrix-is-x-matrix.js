/*
 * @Author      : linye
 * @Created At  : 2022-07-21 15:45:00
 * @Description : 2319
 * https://leetcode.cn/problems/check-if-matrix-is-x-matrix/
 */

require('./log');

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === j || i + j === col - 1) {
        if (grid[i][j] === 0) return false;
      } else {
        if (grid[i][j] !== 0) return false;
      }
    }
  }
  return true;
};

const grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]];
const grid1 = [[5,7,0],[0,3,1],[0,5,0]];

log(grid, checkXMatrix);
log(grid1, checkXMatrix);

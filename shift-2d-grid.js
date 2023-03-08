/*
 * @Author      : linye
 * @Created At  : 2022-07-20 12:06:19
 * @Description : 1260
 * https://leetcode.cn/problems/shift-2d-grid/
 */

require('./log');

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const move = k % (m * n);
  if (move === 0) return grid;
  const arr = grid.reduce((sum, cur) => {
    return sum.concat(cur);
  }, []);
  const newArr = arr.slice(m * n - move).concat(arr.slice(0, m * n - move));
  const res = [];
  let idx = 0;
  for (let i = 0; i < m; i++) {
    res[i] = newArr.slice(idx, idx + n);
    idx += n;
  }
  return res;
};

log([[1],[2],[3],[4],[7],[6],[5]], 23, shiftGrid);

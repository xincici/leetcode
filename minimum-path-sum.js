/*
 * @Author      : linye
 * @Created At  : 2022-09-07 17:47:02
 * @Description : 64
 * https://leetcode.cn/problems/minimum-path-sum/
 */

require('./log');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const row = grid.length, col = grid[0].length;
  const map = new Map();
  let res = Infinity;
  function dfs(r, c, sum) {
    sum += grid[r][c];
    if (r === row - 1 && c === col - 1) {
      return res = Math.min(res, sum);
    }
    const key = `${r},${c}`;
    if (map.has(key) && sum >= map.get(key)) return;
    map.set(key, sum);
    if (r < row - 1) dfs(r + 1, c, sum);
    if (c < col - 1) dfs(r, c + 1, sum);
  }
  dfs(0, 0, 0);
  return res;
};

var s1 = function(grid) {
  const row = grid.length, col = grid[0].length;
  const dp = Array.from(grid, () => []);
  dp[0][0] = grid[0][0];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) dp[0][j] = dp[0][j - 1] + grid[0][j];
      else if (j === 0) dp[i][0] = dp[i - 1][0] + grid[i][0];
      else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[row - 1][col - 1];
};

const g1 = [[1,3,1],[1,5,1],[4,2,1]]
const g2 = [[1,2,3],[4,5,6]]
log(g1, s1);
log(g2, s1);

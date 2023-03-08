/*
 * @Author      : linye
 * @Created At  : 2022-10-08 16:12:59
 * @Description : 63
 * https://leetcode.cn/problems/unique-paths-ii/
 */

require('./log');

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 0) {
      dp[0][i] = 1;
    } else break;
  }
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = 1;
    } else break;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  console.log({dp})
  return dp[m - 1][n - 1];
};

const ob = [[0,0,0],[0,1,0],[0,0,0],[0,0,0]]
log(ob, uniquePathsWithObstacles);

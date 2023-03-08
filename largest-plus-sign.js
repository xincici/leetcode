/*
 * @Author      : linye
 * @Created At  : 2022-11-09 11:04:54
 * @Description : 764
 * https://leetcode.cn/problems/largest-plus-sign/
 */

require('./log');

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
  if (!mines.length) return (n + 1) >> 1;
  const map = new Map();
  mines.forEach(item => map.set(item.join(','), 1));
  const dp = Array.from({length: n}, () => Array.from({length: n}, () => ({})));
  function get(arr, i, j, dir) {
    if (i < 0 || j < 0 || i >= n || j >= n) return 0;
    return arr[i][j][dir];
  }
  function gm(arr, i, j) {
    return Math.min.apply(null, ['U','L','D','R'].map(d => get(arr, i, j, d)));
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map.has(`${i},${j}`)) {
        dp[i][j]['U'] = dp[i][j]['L'] = dp[i][j]['D'] = dp[i][j]['R'] = 0;
        continue;
      }
      dp[i][j]['U'] = get(dp, i-1, j, 'U') + 1;
      dp[i][j]['L'] = get(dp, i, j-1, 'L') + 1;
    }
  }
  let res = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (map.has(`${i},${j}`)) continue;
      dp[i][j]['D'] = get(dp, i + 1, j, 'D') + 1;
      dp[i][j]['R'] = get(dp, i, j + 1, 'R') + 1;
      res = Math.max(res, gm(dp, i, j));
    }
  }
  return res;
};

log(3, [[1,1]], orderOfLargestPlusSign)

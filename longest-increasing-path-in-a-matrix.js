/*
 * @Author      : linye
 * @Created At  : 2022-10-27 17:12:27
 * @Description : 329
 * https://leetcode.cn/problems/longest-increasing-path-in-a-matrix/
 */

require('./log');

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const arr = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var longestIncreasingPath = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  function dfs(i, j) {
    const key = `${i},${j}`;
    if (map.has(key)) return map.get(key);
    const list = arr.map(item => {
      let [r, c] = item;
      r += i;
      c += j;
      if (r < 0 || r >= m || c < 0 || c >= n) return null;
      if (matrix[r][c] <= matrix[i][j]) return null;
      return [r, c];
    }).filter(Boolean);
    if (!list.length) {
      map.set(key, 1);
      return 1;
    }
    const max = 1 + Math.max.apply(null, list.map(item => dfs(item[0], item[1])));
    map.set(key, max);
    return max;
  }
  let res = 1;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, dfs(i, j));
    }
  }
  return res;
};

const m1 = [[9,9,4],[6,6,8],[2,1,1]];
const m2 = [[1, 2]];
// log(m1, longestIncreasingPath)
log(m2, longestIncreasingPath)

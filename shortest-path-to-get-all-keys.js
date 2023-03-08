/*
 * @Author      : linye
 * @Created At  : 2022-11-10 10:24:33
 * @Description : 864
 * https://leetcode.cn/problems/shortest-path-to-get-all-keys/
 */

require('./log');

/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
  const row = grid.length, col = grid[0].length;
  const ds = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let sx, sy;
  const keys = new Map();
  const keyStr = 'abcdef';
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const char = grid[i][j];
      if (keyStr.includes(char)) keys.set(char, keys.size);
      else if (char === '@') {
        sx = i; sy = j;
      }
    }
  }
  const queue = [[sx, sy, 0]];
  const len = 1 << keys.size;
  const dp = Array.from(grid, () => {
    return Array.from(grid[0], () => {
      return new Array(len).fill(-1);
    });
  });
  dp[sx][sy][0] = 0;
  while (queue.length) {
    let [x, y, mask] = queue.shift();
    for (let i = 0; i < 4; ++i) {
      let nx = x + ds[i][0], ny = y + ds[i][1];
      if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
      const char = grid[nx][ny];
      if (char === '#') continue;
      if (char === '.' || char === '@') {
        if (dp[nx][ny][mask] === -1) {
          dp[nx][ny][mask] = dp[x][y][mask] + 1;
          queue.push([nx, ny, mask]);
        }
      } else if (keyStr.includes(char)) {
        const idx = keys.get(char);
        if (dp[nx][ny][mask | (1 << idx)] === -1) {
          dp[nx][ny][mask | (1 << idx)] = dp[x][y][mask] + 1;
          if ((mask | (1 << idx)) === len - 1) {
            return dp[nx][ny][mask | (1 << idx)];
          }
          queue.push([nx, ny, mask | (1 << idx)]);
        }
      } else {
        const idx = keys.get(char.toLowerCase());
        if ((mask & (1 << idx)) !== 0 && dp[nx][ny][mask] === -1) {
          dp[nx][ny][mask] = dp[x][y][mask] + 1;
          queue.push([nx, ny, mask]);
        }
      }
    }
  }
  return -1;
};

grid = ["@.a.#","#.##.","b.A.B"];
log(grid, shortestPathAllKeys)

/*
 * @Author      : linye
 * @Created At  : 2022-10-25 10:24:17
 * @Description : 934
 * https://leetcode.cn/problems/shortest-bridge/
 */

require('./log');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
  const len = grid.length;
  let visit = Array.from(grid, () => new Array(len).fill(0));
  const q1 = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === 1) {
        q1.push([i, j]);
        break;
      }
      visit[i][j] = 1;
    }
    if (q1.length) break;
  }
  const diff = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const q2 = [];
  while (q1.length) {
    let [i, j] = q1.shift();
    visit[i][j] = 1;
    q2.push([i, j]);
    diff.forEach(item => {
      let [r, c] = item;
      r += i;
      c += j;
      if (r < 0 || r >= len || c < 0 || c >= len) return;
      if (grid[r][c] === 1) {
        if(visit[r][c]) return;
        visit[r][c] = 1;
        q1.push([r, c]);
      }
    });
  }
  console.log({q1, q2, visit})
  let res = -1;
  let flag = false;
  function bfs() {
    if (flag) return;
    res++;
    let l = q2.length;
    for (let k = 0; k < l; k++) {
      let [i, j] = q2.shift();
      diff.forEach(item => {
        let [r, c] = item;
        r += i;
        c += j;
        if (r < 0 || r >= len || c < 0 || c >= len) return;
        if (visit[r][c]) return;
        if (grid[r][c] === 1) return flag = true;
        visit[r][c] = 1;
        q2.push([r, c]);
      });
    }
    if (q2.length) bfs();
  }
  bfs();
  return res;
};

const g1 = [[0,1,0],[0,0,0],[0,0,1]];
const g2 = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]];
log(g1, shortestBridge)
log(g2, shortestBridge)



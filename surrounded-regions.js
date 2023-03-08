/*
 * @Author      : linye
 * @Created At  : 2022-07-07 15:51:15
 * @Description : 130
 * https://leetcode.cn/problems/surrounded-regions/
 */

require('../log');

const map = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

var solve = function(board) {
  const m = board.length;
  const n = board[0].length;
  const tmp = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== 0 && i !== m - 1 && j !== 0 && j !== n - 1) continue;
      if (board[i][j] === 'O') tmp.push(`${i},${j}`);
    }
  }
  let idx = 0;
  while(idx < tmp.length) {
    const one = tmp[idx];
    const [i, j] = one.split(',').map(Number);
    map.forEach(item => {
      const elx = item[0] + i;
      const ely = item[1] + j;
      if (elx < 0 || ely < 0 || elx >= m || ely >= n) return;
      if (tmp.includes(`${elx},${ely}`)) return;
      if (board[elx][ely] === 'O') {
        tmp.push(`${elx},${ely}`);
      }
    });
    idx++;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (tmp.includes(`${i},${j}`)) continue;
      board[i][j] = 'X';
    }
  }
  return board;
};

const board = [
  ["X","X","X","O"],
  ["X","O","X","X"],
  ["O","X","O","X"],
  ["X","O","X","X"]
];

log(board, solve);

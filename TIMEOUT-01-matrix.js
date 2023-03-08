/*
 * @Author      : linye
 * @Created At  : 2022-08-03 16:00:08
 * @Description : 542
 * https://leetcode.cn/problems/01-matrix/
 */

require('./log');

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var list = [[-1, 0], [1, 0], [0, -1], [0, 1]];

var find = function(mat, row, col, i, j) {
  let queue = [];
  const map = {};
  function getNext(i, j, level) {
    const arr = list
      .map(item => {
        return [item[0] + i, item[1] + j];
      })
      .filter(item => {
        if (item[0] < 0 || item[1] < 0) return false;
        if (item[0] >= row || item[1] >= col) return false; 
        return true;
      })
      .map(item => item.join(','))
      .filter(item => !queue.includes(item));
    arr.forEach(item => {
      map[item] = level;
    });
    return arr;
  }
  queue = queue.concat(getNext(i, j, 1));
  let idx = 0;
  while (idx < queue.length) {
    const item = queue[idx];
    const [m, n] = item.split(',').map(v => +v);
    if (mat[m][n] === 0) return map[item];
    else {
      queue = queue.concat(getNext(m, n, map[item] + 1));
    }
    idx++;
  }
};

var updateMatrix = function(mat) {
  const row = mat.length;
  const col = mat[0].length;
  const res = Array.from({ length: row }, () => []);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) {
        res[i][j] = 0;
        continue;
      }
      res[i][j] = find(mat, row, col, i, j);
    }
  }
  return res;
};

const m1 = [[0,0,0,1],[0,1,0,1],[1,1,1,1],[1,1,1,1],[1,1,1,1],[0,1,0,1]];
const m2 = [[0,0,0],[0,1,0],[0,0,0]]
log(m1, updateMatrix);
log(m2, updateMatrix);


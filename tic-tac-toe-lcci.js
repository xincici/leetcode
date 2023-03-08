/*
 * @Author      : linye
 * @Created At  : 2022-08-10 20:13:28
 * @Description : 16.04
 * https://leetcode.cn/problems/tic-tac-toe-lcci/
 */

require('./log');

/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function(board) {
  const len = board.length;
  let full = true;
  const row = board[0].split('');
  const col = board.map(item => item[0]);
  const xxx = [board[0][0], board[len - 1][0]];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const cur = board[i][j];
      row[j] = row[j] === cur ? row[j] : false;
      col[i] = col[i] === cur ? col[i] : false;
      if (cur === ' ') full = false;
      if (i === j) {
        xxx[0] = xxx[0] === cur ? xxx[0] : false; 
      } else if (i + j + 1 === len) {
        xxx[1] = xxx[1] === cur ? xxx[1] : false;
      }
    }
  }
  const res = [...row, ...col, ...xxx].filter(item => item && item !== ' ');
  if (res.length) return res[0];
  return full ? 'Draw' : 'Pending';
};

log(["O X"," XO","X O"], tictactoe);
log(["OOX","XXO","OXO"], tictactoe);
log(["OOX","XXO","OX "], tictactoe);

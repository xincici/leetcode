/*
 * @Author      : linye
 * @Created At  : 2022-08-02 11:53:00
 * @Description : 2038
 * https://leetcode.cn/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
 */

require('./log');

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  if (colors.length < 3) return false;
  let a = b = 0;
  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i] !== colors[i + 1]) {
      i++;
      continue;
    }
    if (colors[i] === 'A') {
      if (colors[i - 1] === 'A') {
        a++;
        continue;
      }
    } else {
      if (colors[i - 1] === 'B') {
        b++;
        continue;
      }
    }
  }
  return a > b;
};

log("ABBBBBBBAAA", winnerOfGame);
log("AAABABB", winnerOfGame);

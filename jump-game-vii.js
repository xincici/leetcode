/*
 * @Author      : linye
 * @Created At  : 2022-08-10 15:36:48
 * @Description : 1871
 * https://leetcode.cn/problems/jump-game-vii/
 */

require('./log');

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
  if (!s.endsWith('0')) return false;
  const len = s.length - 1;
  const queue = [0];
  let res = false;
  let last = minJump - 1, start, end;
  while (queue.length) {
    const idx = queue.shift();
    start = Math.max(idx + minJump, last + 1);
    last = end = Math.min(idx + maxJump, len);
    while (start <= end) {
      if (end === len) {
        res = true;
        break;
      }
      if (s[start] === '0') {
        queue.push(start);
      }
      start++;
    }
    if (res) break;
  }
  return res;
};

log('011010', 2, 3, canReach);
log('01101110', 2, 3, canReach);
log('00', 1, 1, canReach);
log('011001110001000', 3, 5, canReach);
log('01000110110', 2, 3, canReach);
log("011010", 2, 3, canReach);

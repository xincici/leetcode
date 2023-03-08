/*
 * @Author      : linye
 * @Created At  : 2022-07-14 16:24:30
 * @Description : 
 * https://leetcode.cn/problems/programmable-robot/
 */

/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

require('./log');

var robot = function(command, obstacles, x, y) {
  const len = command.length;
  const rc = command.replace(/U/g, '').length;
  const uc = command.length - rc;
  function inner(x, y) {
    const time = ~~Math.min(rc !== 0 ? x / rc : x, uc !== 0 ? y / uc : y);
    x = x - time * rc;
    y = y - time * uc;
    let m = n = idx = 0;
    while (true) {
      if (m === x && n === y) return true;
      if (m > x || n > y) return false;
      if (command[idx] === 'U') n++;
      else m++;
      idx = (idx + 1) % len;
    }
  }
  let res = inner(x, y);
  if (!res) return false;
  obstacles = obstacles.filter(item => item[0] <= x && item[1] <= y);
  return !obstacles.some(item => inner(item[0], item[1]));
};

log("URR", [[2, 2]], 3, 2, robot)
log("URR", [[4, 2]], 3, 2, robot)

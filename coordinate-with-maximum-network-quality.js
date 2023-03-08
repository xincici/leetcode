/*
 * @Author      : linye
 * @Created At  : 2022-11-02 10:37:44
 * @Description : 1620
 * https://leetcode.cn/problems/coordinate-with-maximum-network-quality/
 */

require('./log');

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
  towers = towers.filter(item => item[2] !== 0);
  if (!towers.length) return [0, 0];
  if (towers.length === 1) return [towers[0][0], towers[0][1]];
  let max = 0, mx, my;
  for (let x = 0; x <= 50; x++) {
    for (let y = 0; y <= 50; y++) {
      let val = 0;
      let tx, ty, tq, ds;
      towers.forEach(item => {
        [tx, ty, tq] = item;
        ds = Math.sqrt(Math.pow(tx - x, 2) + Math.pow(ty - y, 2));
        if (ds > radius) return;
        val += ~~(tq / (1 + ds));
      });
      if (val > max) {
        max = val;
        mx = x;
        my = y;
      }
    }
  }
  return [mx, my];
};

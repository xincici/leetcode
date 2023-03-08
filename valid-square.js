/*
 * @Author      : linye
 * @Created At  : 2022-07-29 10:29:13
 * @Description : 593
 * https://leetcode.cn/problems/valid-square/
 */

require('./log');

var distance = function(p1, p2) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
};

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const d12 = distance(p1, p2);
  const d13 = distance(p1, p3);
  const d14 = distance(p1, p4);
  const d23 = distance(p2, p3);
  const d24 = distance(p2, p4);
  const d34 = distance(p3, p4);
  const min = Math.min(d12, d13, d14, d23, d24, d34);
  if (min === 0) return false;
  const max = Math.max(d12, d13, d14, d23, d24, d34);
  let minCount = maxCount = 0;
  [d12, d13, d14, d23, d24, d34].forEach(val => {
    if (val === min) minCount++;
    else if (val === max) maxCount++;
  });
  return minCount === 4 && maxCount === 2;
};

log([0,0], [0,1], [1,1], [1,0], validSquare);
log([0,0], [1,1], [1,0], [0,12], validSquare);
log([1,0], [-1,0], [0,1], [0,-1], validSquare);

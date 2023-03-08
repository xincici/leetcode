/*
 * @Author      : linye
 * @Created At  : 2022-11-16 17:09:33
 * @Description : 2171
 * https://leetcode.cn/problems/removing-minimum-number-of-magic-beans/
 */

require('./log');

/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function(beans) {
  const len = beans.length;
  beans.sort((a, b) => a - b);
  const sum = beans.reduce((acc, cur) => acc + cur, 0);
  let min = Infinity;
  for (let i = 0; i < len; i++) {
    min = Math.min(min, sum - (len - i) * beans[i]);
  }
  return min;
};

log([4,1,6,5], minimumRemoval);
log([2,10,3,2], minimumRemoval);
log([3], minimumRemoval);

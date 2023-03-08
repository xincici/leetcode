/*
 * @Author      : linye
 * @Created At  : 2022-10-18 20:05:15
 * @Description : 875
 * https://leetcode.cn/problems/koko-eating-bananas/
 */

require('./log');

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  const len = piles.length;
  if (len === 1) return Math.ceil(piles[0] / h);
  let min = 1, max = 0;
  for (let i = 0; i < len; i++) {
    max = Math.max(max, piles[i]);
  }
  if (min === max) return min;
  let flag = false;
  while (min < max) {
    let mid = (min + max) >> 1;
    if (min + 1 === max) {
      flag = true;
      mid = max;
    }
    console.log({min, max, mid})
    let ch = h, i = 0, cur;
    for (; i < len; i++) {
      cur = piles[i];
      ch -= Math.ceil(cur / mid);
      if (ch < 0) {
        if (flag) return min;
        min = mid;
        break;
      }
    }
    if (i === len) {
      if (flag) return max;
      max = mid;
    }
  }
};

// log([3,6,7,11], 8, minEatingSpeed)
log([332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184], 823855818, minEatingSpeed)

/*
 * @Author      : linye
 * @Created At  : 2022-08-29 14:57:50
 * @Description : 846
 * https://leetcode.cn/problems/hand-of-straights/
 */

require('./log');

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  let len = hand.length;
  if (len % groupSize !== 0) return false;
  const map = {};
  for (let i = 0; i < len; i++) {
    map[hand[i]] = (map[hand[i]] || 0) + 1;
  }
  const keys = Object.keys(map).sort((a, b) => a - b);
  let i = 0;
  while (i <= keys.length - groupSize) {
    if (map[keys[i]] === 0) {
      i++;
      continue;
    }
    if (+keys[i + groupSize - 1] - +keys[i] !== groupSize - 1) return false;
    let j = i;
    while (j < i + groupSize) {
      if (map[keys[j]] === 0) return false;
      len--;
      map[keys[j]]--;
      j++;
    }
  }
  return len === 0;
};

const a1 = [1,6,8,9,10,6,7,2,3,3,4,5];
log(a1, 3, isNStraightHand) 
const a2 = [1,1,2,2,3,3];
log(a2, 3, isNStraightHand) 

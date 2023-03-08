/*
 * @Author      : linye
 * @Created At  : 2022-10-17 10:40:14
 * @Description : 904
 * https://leetcode.cn/problems/fruit-into-baskets/
 */

require('./log');

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const len = fruits.length;
  if (len <= 2) return len;
  let max = 2;
  const set = new Set();
  for (let i = 0; i < len;) {
    let tmp = -1;
    let j = i;
    for (; j < len; j++) {
      if (fruits[j] !== fruits[i] && tmp < 0) {
        tmp = j;
      }
      set.add(fruits[j]);
      if (set.size > 2) {
        set.clear();
        break;
      }
      max = Math.max(max, j - i + 1);
    }
    if (j === len) break;
    i = tmp;
  }
  return max;
};

const f1 = [1,2,1]
const f2 = [0,1,2,2]
const f3 = [1,2,3,2,2]
const f4 = [3,3,3,1,2,1,1,2,3,3,4]
log(f1, totalFruit);
log(f2, totalFruit);
log(f3, totalFruit);
log(f4, totalFruit);

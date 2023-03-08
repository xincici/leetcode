/*
 * @Author      : linye
 * @Created At  : 2022-08-31 15:35:43
 * @Description : 954
 * https://leetcode.cn/problems/array-of-doubled-pairs/
 */

require('./log');

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
  const map = {};
  const set = new Set([]);
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
    if (arr[i] !== 0) set.add(arr[i]);
  }
  if (map[0] && map[0] % 2 !== 0) return false;
  arr = Array.from(set).sort((a, b) => {
    if (a > b) {
      if (a < 0) return b - a;
    } else {
      if (b < 0) return b - a;
    }
    return a - b;
  });
  let i = 0;
  console.log({arr, map})
  while (i < arr.length) {
    if (map[arr[i]] === 0) {
      i++;
      continue;
    }
    let m = arr[i];
    if (map[m] > (map[m * 2] || 0)) return false;
    map[m * 2] -= map[m];
    i++;
  }
  return true;
};

log([3, 2, -4, -2, 0, 0, 1, 6], canReorderDoubled)
log([2,1,1,4,8,8], canReorderDoubled)
log([-2,-6,-3,4,-4,2], canReorderDoubled)
log([4,2,4,4,2,-4,0,-2,0,4], canReorderDoubled)
log([1,2,1,-8,8,-4,4,-4,2,-2], canReorderDoubled)

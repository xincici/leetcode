/*
 * @Author      : linye
 * @Created At  : 2022-10-10 15:45:40
 * @Description : 845
 * https://leetcode.cn/problems/longest-mountain-in-array/
 */

require('./log');

/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  const len = arr.length;
  let res = 0;
  let flag = 0;
  let start = -1;
  for (let i = 0; i < len - 1; i++) {
    console.log({start, i, flag, res})
    if (arr[i] === arr[i + 1]) {
      if (!flag) continue;
      if (flag < 0) res = Math.max(res, i - start + 1);
      flag = 0;
      start = -1;
    }
    if (arr[i] < arr[i + 1]) {
      if (flag > 0) continue;
      if (!flag) {
        flag = 1;
        start = i;
        continue;
      }
      res = Math.max(res, i - start + 1);
      flag = 1;
      start = i;
    } else {
      if (flag <= 0) continue;
      flag = -1;
    }
  }
  if (flag < 0 && start >= 0) res = Math.max(res, len - start);
  return res;
};

const a1 = [0,1,2,3,4,5,4,3,2,1,0]
const a2 = [2,1,4,5,7,3,2,5];

log(a1, longestMountain)
// log(a2, longestMountain)

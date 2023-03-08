/*
 * @Author      : linye
 * @Created At  : 2022-08-29 17:12:18
 * @Description : 48
 * https://leetcode.cn/problems/rotate-image/
 */

require('./log');

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var get = (arr, diff) => {
  const res = [arr];
  for (let i = 1; i < 4; i++) {
    let last = res[i - 1];
    res[i] = [last[1], diff - last[0]];
  }
  return res;
};

var rotate = function(matrix) {
  const len = matrix.length;
  let time = len >> 1;
  let i = j = 0;
  let diff = len;
  while (time > 0) {
    for (let m = 0; m < diff - 1; m++) {
      let first = [i, j + m];
      const arr = get(first, len - 1);
      let tmp = matrix[arr[0][0]][arr[0][1]];
      for (let l = 1; l < 4; l++) {
        let tmp1 = matrix[arr[l][0]][arr[l][1]];
        matrix[arr[l][0]][arr[l][1]] = tmp;
        tmp = tmp1;
      }
      matrix[arr[0][0]][arr[0][1]] = tmp;
    }
    time--;
    diff -= 2;
    i++;
    j++;
  }
  return matrix;
};

const a1 = [[1]];
const a2 = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
const a3 = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20],[21,22,23,24,25]];

log(a1, rotate);
log(a2, rotate);
log(a3, rotate);

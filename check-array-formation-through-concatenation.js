/*
 * @Author      : linye
 * @Created At  : 2022-09-22 09:48:52
 * @Description : 1640
 * https://leetcode.cn/problems/check-array-formation-through-concatenation/
 */

require('./log');

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i], j = 0;
    for (; j < pieces.length; j++) {
      let piece = pieces[j];
      if (piece[0] === word) {
        let idx = 1;
        while (idx < piece.length) {
          if (piece[idx++] !== arr[++i]) return false;
        }
        if (i === arr.length - 1) return true;
        break;
      }
    }
    if (j === pieces.length) return false;
  }
};

const arr = [91,4,64,78], pieces = [[78],[4,64],[91]]

log(arr, pieces, canFormArray)

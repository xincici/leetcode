/*
 * @Author      : linye
 * @Created At  : 2022-11-03 11:18:39
 * @Description : 1668
 * https://leetcode.cn/problems/maximum-repeating-substring/
 */

require('./log');

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  const ls = sequence.length, lw = word.length;
  if (ls < lw) return 0;
  let res = 0;
  for (let i = 0; i < ls; i++) {
    let str = word.repeat(res + 1);
    while (true) {
      if (sequence.indexOf(str) === i) {
        str += word;
        res = res + 1;
      } else break;
    }
  }
  return res;
};

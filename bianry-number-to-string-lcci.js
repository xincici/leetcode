/*
 * @Author      : linye
 * @Created At  : 2022-07-14 12:57:36
 * @Description : 
 * https://leetcode.cn/problems/bianry-number-to-string-lcci/
 */

/**
 * @param {number} num
 * @return {string}
*/

require('./log');

var printBin = function(num) {
  let res = '0.';
  let last = 0.5;
  let diff = num;
  for(let i = 1; i <= 30; i++) {
    if (diff === last) {
      res += '1';
      diff = 0;
      break;
    } else if (diff > last) {
      res += '1';
      diff = +(diff - last).toFixed(15);
    } else {
      res += '0';
    }
    last = last / 2;
  }
  if (diff !== 0) return 'ERROR';
  return res;
};

log(0.72243, printBin);
log(0.625, printBin);

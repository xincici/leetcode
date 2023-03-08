/*
 * @Author      : linye
 * @Created At  : 2022-09-20 16:13:49
 * @Description : 2384
 * https://leetcode.cn/problems/largest-palindromic-number/
 */

require('./log');

/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function(num) {
  const arr = new Array(10).fill(0);
  for (let i = 0; i < num.length; i++) {
    arr[+num[i]]++;
  }
  let max = '';
  let pref = '', tail = '', cur;
  for (let i = 9; i >= 0; i--) {
    if (arr[i] % 2 !== 0 && max === '') {
      max = i;
    }
    if (i === 0 && !pref) break;
    cur = String(i).repeat(arr[i] >> 1);
    pref = pref + cur;
    tail = cur + tail;
  }
  return (pref + max + tail) || '0';
};

log("444947137", largestPalindromic)
log("4433664477", largestPalindromic)
log("00009", largestPalindromic)
log("000000", largestPalindromic)

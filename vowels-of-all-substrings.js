/*
 * @Author      : linye
 * @Created At  : 2022-09-09 18:32:25
 * @Description : 2063
 * https://leetcode.cn/problems/vowels-of-all-substrings/
 */

require('./log');

/**
 * @param {string} word
 * @return {number}
 */
const ios = 'aeiou';
var countVowels = function(word) {
  const len = word.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    if (!ios.includes(word[i])) continue;
    res += (i + 1) * (len - i);
  }
  return res;
};

log('aba', countVowels)
log('noosabasboosa', countVowels)

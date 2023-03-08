/*
 * @Author      : linye
 * @Created At  : 2022-08-17 15:41:34
 * @Description : 318
 * https://leetcode.cn/problems/maximum-product-of-word-lengths/
 */

require('./log');

/**
 * @param {string[]} words
 * @return {number}
 */
var noSame = function(s1, s2) {
  let i = 0;
  while (i < s2.length) {
    if (s1.includes(s2[i])) return false;
    i++;
  }
  return true;
};
var maxProduct = function(words) {
  words.sort((a, b) => b.length - a.length);
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].length * words[i + 1].length <= max) break;
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].length * words[j].length <= max) break;
      if (noSame(words[i], words[j])) max = Math.max(max, words[i].length * words[j].length);
    }
  }
  return max;
};

log(["abcw","baz","foo","bar","xtfn","abcdef"], maxProduct);
log(["a","aa","aaa","aaaa"], maxProduct);

/*
 * @Author      : linye
 * @Created At  : 2022-09-08 16:09:03
 * @Description : 1048
 * https://leetcode.cn/problems/longest-string-chain/
 */

require('./log');

/**
 * @param {string[]} words
 * @return {number}
 */
var isPre = function(first, next) {
  if (first.length + 1 !== next.length) return false;
  let flag = false, idf = idn = 0;
  while (idf < first.length) {
    if (first[idf] !== next[idn]) {
      if (flag) return false;
      else flag = true;
      idn++;
      continue;
    }
    idf++;
    idn++;
  }
  return true;
};
var longestStrChain = function(words) {
  words.sort((a, b) => a.length - b.length);
  const dp = [1];
  let max = 1;
  for (let i = 1; i < words.length; i++) {
    let tmp = 1;
    for (let j = i - 1; j >= 0; j--) {
      console.log({i, j, tmp})
      if (tmp > j + 1) break;
      if (isPre(words[j], words[i])) {
        tmp = Math.max(tmp, dp[j] + 1);
      }
    }
    dp[i] = tmp;
    max = Math.max(dp[i], max);
    console.log({dp})
  }
  return max;
};

log(["a","b","ba","bca","bda","bdca"], longestStrChain);
log(["xbc","pcxbcf","xb","cxbc","pcxbc"], longestStrChain);

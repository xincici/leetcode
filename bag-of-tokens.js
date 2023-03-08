/*
 * @Author      : linye
 * @Created At  : 2022-07-29 17:57:57
 * @Description : 948
 * https://leetcode.cn/problems/bag-of-tokens/
 */

require('./log');

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  tokens.sort((a, b) => a - b);
  if (power < tokens[0]) return 0;
  let res = 0;
  let start = 0, end = tokens.length - 1;
  while (start <= end) {
    if (power < tokens[start]) {
      if (start === end) break;
      power = power + tokens[end];
      res--;
      end--;
      continue;
    }
    power = power - tokens[start];
    start++;
    res++;
  }
  return res;
};

log([100,200,300,400], 200, bagOfTokensScore);
log([100,200], 150, bagOfTokensScore);

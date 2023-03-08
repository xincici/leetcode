/*
 * @Author      : linye
 * @Created At  : 2022-11-15 14:16:34
 * @Description : 516
 * https://leetcode.cn/problems/longest-palindromic-subsequence/
 */

require('./log');

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const ls = s.length;
  const dp = Array.from(s, () => []);
  for (let len = 1; len <= ls; len++) {
    for (let i = 0; i + len <= ls; i++) {
      const j = i + len - 1;
      if (len <= 2) {
        dp[i][j] = s[i] === s[j] ? len : 1;
      } else if (s[i] !== s[j]) {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1], dp[i + 1][j - 1] + 2);
      }
    }
  }
  return dp[0][ls - 1];
};

log('abbabb', longestPalindromeSubseq)

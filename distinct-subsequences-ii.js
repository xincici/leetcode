/*
 * @Author      : linye
 * @Created At  : 2022-10-14 14:13:43
 * @Description : 940
 * https://leetcode.cn/problems/distinct-subsequences-ii/
 */

require('./log');

/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
  const MOD = 1e9 + 7;
  const ACODE = 'a'.charCodeAt(0);
  const len = s.length;
  const map = new Array(26).fill(-1);
  const dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (j = 0; j < 26; j++) {
      if (map[j] !== -1) {
        dp[i] = (dp[i] + dp[map[j]]) % MOD;
      }
    }
    let idx = s.charCodeAt(i) - ACODE;
    map[idx] = i;
  }
  console.log({dp, map})
  let res = 0;
  for (let i = 0; i < 26; i++) {
    if (map[i] === -1) continue;
    res = (res + dp[map[i]]) % MOD;
  }
  return res;
};

log("abc", distinctSubseqII)

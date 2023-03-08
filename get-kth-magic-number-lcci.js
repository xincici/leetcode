/*
 * @Author      : linye
 * @Created At  : 2022-09-28 10:18:44
 * @Description : 17.09
 * https://leetcode.cn/problems/get-kth-magic-number-lcci/
 */

require('./log');

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
  if (k === 1) return 1;
  const dp = [1];
  let p3 = p5 = p7 = 0;
  let m3, m5, m7, min;
  for (let i = 1; i < k; i++) {
    m3 = 3 * dp[p3];
    m5 = 5 * dp[p5];
    m7 = 7 * dp[p7];
    min = Math.min(m3, m5, m7);
    if (m3 === min) p3++;
    if (m5 === min) p5++;
    if (m7 === min) p7++;
    dp[i] = min;
  }
  return dp[k - 1];
};

log(10, getKthMagicNumber);

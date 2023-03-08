/*
 * @Author      : linye
 * @Created At  : 2022-08-17 11:53:54
 * @Description : 1745
 * https://leetcode.cn/problems/palindrome-partitioning-iv/
 */

require('./log');

/**
 * @param {string} s
 * @return {boolean}
 */

var isPa = function(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};

var checkPartitioning = function(s) {
  const len = s.length;
  if (len === 3) return true;
  let l, r;
  for (l = 0; l < len - 2; l++) {
    if (!isPa(s, 0, l)) continue;
    for (r = len - 1; r > l + 1; r--) {
      if (isPa(s, 0, l) && isPa(s, l + 1, r - 1) && isPa(s, r, len - 1)) return true;
    }
  }
  return false;
};

log("abece", checkPartitioning);

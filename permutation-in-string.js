/*
 * @Author      : linye
 * @Created At  : 2022-11-04 14:53:04
 * @Description : 567
 * https://leetcode.cn/problems/permutation-in-string/
 */

require('./log');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const need = new Map();
  const win = new Map();
  for (let i = 0; i < s1.length; i++) {
    win.set(s1[i], 0);
    need.set(s1[i], (need.get(s1[i]) || 0) + 1);
  }
  let left = 0, right = 0;
  const ok = need.size, len = s1.length;
  let cnt = 0, char;
  while (right < s2.length) {
    char = s2[right];
    right++;
    if (!need.has(char)) continue;
    win.set(char, win.get(char) + 1);
    if (win.get(char) === need.get(char)) cnt++;
    while (cnt === ok) {
      if (right - left === len) return true;
      char = s2[left];
      left++;
      if (!need.has(char)) continue;
      if (win.get(char) === need.get(char)) cnt--;
      win.set(char, win.get(char) - 1);
    }
  }
  return false;
};

const s1 = "ab", s2 = "eidbaooo";
const s11= "ab", s22 = "eidboaoo"
log(s1, s2, checkInclusion)
log(s11, s22, checkInclusion)

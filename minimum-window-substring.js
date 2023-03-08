/*
 * @Author      : linye
 * @Created At  : 2022-11-03 17:23:10
 * @Description : 76
 * https://leetcode.cn/problems/minimum-window-substring/
 */

require('./log');

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const need = new Map();
  const win = new Map();
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], (need.get(t[i]) || 0) + 1);
    win.set(t[i], 0);
  }
  const ok = need.size;
  let left = 0, right = 0;
  let start = 0, len = Infinity;
  let cnt = 0, char;
  while (right < s.length) {
    char = s[right];
    right++;
    if (!need.has(char)) continue;
    win.set(char, win.get(char) + 1);
    if (win.get(char) === need.get(char)) cnt++;
    while (cnt === ok) {
      if (right - left < len) {
        len = right - left;
        start = left;
      }
      char = s[left];
      left++;
      if (!need.has(char)) continue;
      if (win.get(char) === need.get(char)) cnt--;
      win.set(char, win.get(char) - 1);
    }
  }
  return len === Infinity ? '' : s.substr(start, len);
};

const s = "ADOBECODEBANC", t = "ABC";
log(s, t, minWindow)

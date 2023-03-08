/*
 * @Author      : linye
 * @Created At  : 2022-11-04 17:17:01
 * @Description : 438
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/
 */

require('./log');

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const need = new Map();
  const win = new Map();
  for (let i = 0; i < p.length; i++) {
    win.set(p[i], 0);
    need.set(p[i], (need.get(p[i]) || 0) + 1);
  }
  const res = [];
  let left = 0, right = 0;
  const ok = need.size;
  const len = p.length;
  let cnt = 0, char;
  while (right < s.length) {
    char = s[right];
    right++;
    if (!need.has(char)) continue;
    win.set(char, win.get(char) + 1);
    if (win.get(char) === need.get(char)) cnt++;
    while (cnt === ok) {
      if (right - left === len) res.push(left);
      char = s[left];
      left++;
      if (!need.has(char)) continue;
      if (win.get(char) === need.get(char)) cnt--;
      win.set(char, win.get(char) - 1);
    }
  }
  return res;
};

const s1 = "cbaebabacd", p1 = "abc";
const s2 = "ababc", p2 = "ab";
log(s1, p1, findAnagrams)
log(s2, p2, findAnagrams)

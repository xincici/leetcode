/*
 * @Author      : linye
 * @Created At  : 2022-08-03 13:09:19
 * @Description : 899
 * https://leetcode.cn/problems/orderly-queue/
 */

var getMin = function(s1, s2) {
  if (s1 === s2) return s1;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    if (s1.charCodeAt(i) < s2.charCodeAt(i)) return s1;
    return s2;
  }
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
  if (k > 1) return Array.from(s).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  let min = last = s;
  for (let i = 1; i < s.length; i++) {
    last = last.substr(1) + last.substr(0, 1);
    min = getMin(min, last);
  }
  return min;
};

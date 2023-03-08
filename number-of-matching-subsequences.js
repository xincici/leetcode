/*
 * @Author      : linye
 * @Created At  : 2022-11-17 09:56:03
 * @Description : 792
 * https://leetcode.cn/problems/number-of-matching-subsequences/
 */

require('./log');

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  const len = s.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (!map.has(s[i])) map.set(s[i], [i]);
    else map.get(s[i]).push(i);
  }
  function match(word) {
    let idx = -1, list;
    for (let i = 0; i < word.length; i++) {
      list = map.get(word[i]) || [];
      if (!list.length || idx >= list.at(-1)) return false;
      if (idx < list[0]) {
        idx = list[0];
        continue;
      }
      let left = 0, right = list.length - 1, mid;
      while (left < right) {
        mid = (right + left) >> 1;
        if (list[mid] < idx) left = mid + 1;
        else if (list[mid] > idx) right = mid - 1;
        else {
          left = mid;
          break;
        }
      }
      idx = idx < list[left] ? list[left] : list[left + 1];
    }
    return true;
  }
  return words.filter(match).length;
};

const s1 = "abcde", w1 = ["a","bb","acd","ace"];

log(s1, w1, numMatchingSubseq )

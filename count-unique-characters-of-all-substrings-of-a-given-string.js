/*
 * @Author      : linye
 * @Created At  : 2022-09-06 19:24:10
 * @Description : 828
 * https://leetcode.cn/problems/count-unique-characters-of-all-substrings-of-a-given-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
  const len = s.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (!map[s[i]]) map[s[i]] = [-1, i];
    else map[s[i]].push(i);
  }
  let res = 0;
  for (let key in map) {
    const arr = map[key];
    arr.push(len);
    for (i = 1; i < arr.length - 1; i++) {
      res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
    }
  }
  return res;
};

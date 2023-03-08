/*
 * @Author      : linye
 * @Created At  : 2022-11-08 14:27:20
 * @Description : 809
 * https://leetcode.cn/problems/expressive-words/
 */

require('./log');

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
  const len = s.length;
  function split(str) {
    const tmp = [];
    let last = 0;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[last]) continue;
      tmp.push(str.substring(last, i));
      last = i;
    }
    tmp.push(str.substring(last));
    return tmp;
  }
  const arr = split(s);
  function match(word) {
    if (len < word.length) return false;
    const warr = split(word);
    if (warr.length !== arr.length) return false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === warr[i]) continue;
      if (arr[i][0] !== warr[i][0]) return false;
      if (arr[i].length < warr[i].length) return false;
      if (arr[i].length < 3) return false;
    }
    return true;
  }
  return words.filter(match).length;
};

log("heeellooo", ["hello", "hi", "helo"], expressiveWords)

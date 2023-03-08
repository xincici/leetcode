/*
 * @Author      : linye
 * @Created At  : 2022-09-08 14:58:06
 * @Description : 17
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 */

require('./log');

/**
 * @param {string} digits
 * @return {string[]}
 */

const smap = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};
var letterCombinations = function(digits) {
  const len = digits.length;
  const res = [];
  const tmp = [];
  function backtrack(idx) {
    if (tmp.length === len) {
      res.push(tmp.join(''));
    }
    if (idx >= len) return;
    const letter = digits[idx];
    const ds = smap[letter];
    console.log({letter, ds})
    for (let j = 0; j < ds.length; j++) {
      tmp.push(ds[j]);
      backtrack(idx + 1);
      tmp.pop();
    }
  }
  backtrack(0);
  return res;
};

log('234', letterCombinations);
// log('2345', letterCombinations);

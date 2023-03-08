/*
 * @Author      : linye
 * @Created At  : 2022-08-16 12:25:00
 * @Description : 1209
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string-ii/
 */

require('./log');

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  if (s.length < k) return s;
  const stack = [1];
  let idx = 1;
  while (idx < s.length) {
    let tmp = 1;
    if (s[idx] === s[idx - 1]) {
      tmp = stack[stack.length - 1] + 1;
    }
    if (tmp === k) {
      s = s.slice(0, stack.length - k + 1) + s.slice(idx + 1);
      stack.length = stack.length - k + 1;
      idx = idx - k + 1;
      continue;
    }
    stack.push(tmp);
    idx++;
  }
  return s;
};

var removeDuplicates_1 = function(s, k) {
  if (s.length < k) return s;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    stack.push(char);
    if (stack.length < k) continue;
    let j = k - 1, idx = stack.length - 2;
    while (j > 0) {
      if (stack[idx] !== char) break;
      idx--;
      j--;
    }
    if (j === 0) stack.length = stack.length - k;
  }
  return stack.join('');
};

var timeout_removeDuplicates = function(s, k) {
  if (s.length < k) return s;
  let flag = false;
  function inner(str) {
    let cnt = 1;
    let idx = 1;
    let last = str[0];
    while (idx < str.length) {
      if (str[idx] === last) {
        cnt++;
      } else {
        last = str[idx];
        cnt = 1;
        idx++;
        continue;
      }
      if (cnt === k) {
        flag = true;
        str = str.slice(0, idx - k + 1) + str.slice(idx + 1);
        idx = idx - k + 1;
        last = '';
        cnt = 0;
        continue;
      }
      idx++;
    }
    return str;
  }
  while (true) {
    if (s.length < k) break;
    flag = false;
    s = inner(s);
    if (!flag) break;
  }
  return s;
};

log('deeedbbcccbdaa', 3, removeDuplicates);
log('pbbcggttciiippooaais', 2, removeDuplicates);

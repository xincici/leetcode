/*
 * @Author      : linye
 * @Created At  : 2022-11-18 18:35:07
 * @Description : 678
 * https://leetcode.cn/problems/valid-parenthesis-string/
 */

require('./log');

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  const len = s.length;
  const stack = [];
  for (let i = 0; i < len; i++) {
    if (s[i] === ')') {
      if (!stack.length) return false;
      let j = stack.length - 1;
      for (; j >= 0; j--) {
        if (stack[j] === '*') continue;
        stack.splice(j, 1);
        break;
      }
      if (j < 0) stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  let cnt = 0;
  while (stack.length) {
    if (stack.pop() === '*') cnt++;
    else cnt--;
    if (cnt < 0) return false;
  }
  return true;
};

log("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())", checkValidString)

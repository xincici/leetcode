/*
 * @Author      : linye
 * @Created At  : 2022-11-08 10:08:38
 * @Description : 1106
 * https://leetcode.cn/problems/parsing-a-boolean-expression/
 */

require('./log');

/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
  const stack = [];
  let char;
  for (let i = 0; i < expression.length; i++) {
    char = expression[i];
    if (char === ',') continue;
    if (char === ')') {
      const last = stack.lastIndexOf('(');
      const opt = stack[last - 1];
      const str = stack.slice(last + 1).join('');
      stack.length = last - 1;
      let tmp;
      if (opt === '!') tmp = str === 't' ? 'f' : 't';
      else if (opt === '|') tmp = str.includes('t') ? 't' : 'f';
      else tmp = str.includes('f') ? 'f' : 't';
      stack.push(tmp);
    } else stack.push(char);
  }
  return stack[0] === 't';
};

const s1 = "&(t,f)";
const s2 = "|(t,f)";
const s3 = "|(|(t,f,t),!(f))";

log(s1, parseBoolExpr)
log(s2, parseBoolExpr)
log(s3, parseBoolExpr)

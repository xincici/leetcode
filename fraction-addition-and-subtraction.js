/*
 * @Author      : linye
 * @Created At  : 2022-07-27 10:08:39
 * @Description : 592
 * https://leetcode.cn/problems/fraction-addition-and-subtraction/
 */

require('./log');

var int = v => +v;

var div = function(n1, n2) {
  if (n1 === 0) return '0/1';
  if (n1 % n2 === 0) return (n1 / n2) + '/1';
  if (n2 % n1 === 0) return '1/' + (n2 / n1);
  let tmp = Math.min(n1, n2);
  while (tmp > 0) {
    if (n1 % tmp === 0 && n2 % tmp === 0) break;
    tmp--;
  }
  return (n1 / tmp) + '/' + (n2 / tmp);
};

var time = function(n1, n2) {
  if (n1 === n2) return n1;
  if (n1 > n2) [n1, n2] = [n2, n1];
  let tmp = n1 * 2;
  while (true) {
    if (tmp % n2 === 0) return tmp;
    tmp += n1;
  }
};

var add = function(a1, a2) {
  const [m1, n1] = a1.split('/').map(int);
  const [m2, n2] = a2.split('/').map(int);
  if (m1 === 0) return a2;
  if (m2 === 0) return a1;
  const tmp = time(n1, n2);
  return div(tmp / n1 * m1 + tmp / n2 * m2, tmp);
};

var minus = function(a1, a2) {
  const [m1, n1] = a1.split('/').map(int);
  const [m2, n2] = a2.split('/').map(int);
  const tmp = time(n1, n2);
  return div(tmp / n1 * m1 - tmp / n2 * m2, tmp);
};

var countOnce = function(a1, a2, s1, s2) {
  if (s1 === s2) {
    return [s1, add(a1, a2)];
  }
  if (a1 === a2) return ['+', '0/1'];
  if (eval(a1) > eval(a2)) return [s1, minus(a1, a2)];
  return [s2, minus(a2, a1)];
};

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const nums = expression.split(/[+-]/);
  if (nums[0] === '') nums.shift();
  if (nums.length === 1) return expression;
  const opts = expression.match(/[+-]/g);
  if (opts.length < nums.length) opts.unshift('+');
  let res = [opts[0], nums[0]];
  for (let i = 1; i < nums.length; i++) {
    res = countOnce(res[1], nums[i], res[0], opts[i]);
  }
  return res[0] === '+' ? res[1] : res.join('');
};

log('-1/2+1/2+1/2+1/2', fractionAddition);
log("-1/2+1/2+1/3", fractionAddition);
log("1/3-1/2", fractionAddition);
log("-1/2+1/3", fractionAddition);


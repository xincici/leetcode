/*
 * @Author      : linye
 * @Created At  : 2022-08-10 10:45:23
 * @Description : 640
 * https://leetcode.cn/problems/solve-the-equation/
 */

require('./log');

/**
 * @param {string} equation
 * @return {string}
 */

var parse = function(str) {
  str = str.replace('x', '');
  if (str === '-') return -1;
  if (['', '+'].includes(str)) return 1;
  return parseInt(str, 10);
};

var solveEquation = function(equation) {
  let [left, right] = equation.split('=');
  const larr = left.match(/[+-]?(\d+)?x?/g);
  const rarr = right.match(/[+-]?(\d+)?x?/g);
  const lres = [0, 0];
  const rres = [0, 0];
  for (let i = 0; i < larr.length - 1; i++) {
    const one = larr[i];
    if (one.includes('x')) {
      lres[0] += parse(one);
    } else {
      lres[1] += parse(one);
    }
  }
  for (let i = 0; i < rarr.length - 1; i++) {
    const one = rarr[i];
    if (one.includes('x')) {
      rres[0] += parse(one);
    } else {
      rres[1] += parse(one);
    }
  }
  left = lres[0] - rres[0];
  right = rres[1] - lres[1];
  if (left === 0 && right === 0) return 'Infinite solutions';
  if (left === 0 && right !== 0) return 'No solution';
  return `x=${right / left}`;
};

log('x+5-3+x=6+x-2', solveEquation);
log("0x=0", solveEquation);

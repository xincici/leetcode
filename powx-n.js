/*
 * @Author      : linye
 * @Created At  : 2022-08-25 15:21:41
 * @Description : 50
 * https://leetcode.cn/problems/powx-n/
 */

require('./log');

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//   if (n === 0) return 1;
//   if (n < 0) return 1 / myPow(x, -n);
//   if (n % 2 !== 0) return x * myPow(x, n - 1);
//   return myPow(x * x, n >> 1);
// }

var myPow = function(x, n) {
  const xx = x, nn = n;
  if (n === 0) return 1;
  if (n === 1) return x;
  if (x === 0) return n >= 0 ? 0 : Infinity;
  if (x < 0) x = 0 - x;
  if (n < 0) n = 0 - n;
  // let tmp = {
  //   1: x,
  //   2: x * x,
  // }
  // let res = 1;
  // let last = 1;
  // while (n > 0 && last > 0) {
  //   if (res === 0) break;
  //   if (n >= last * 2) {
  //     n = n - last * 2;
  //     tmp[last * 2] = tmp[last] * tmp[last];
  //     res = res * tmp[last * 2];
  //     last = 2 * last;
  //   } else if (n >= last) {
  //     n = n - last;
  //     res = res * tmp[last];
  //   } else {
  //     last = last >> 1;
  //   }
  // }
  function inner(v, t) {
    if (t === 0) return 1;
    if (t === 1) return v;
    if (t === 2) return v * v;
    if (t % 2 !== 0) return v * inner(v * v, (t - 1) / 2);
    return inner(v * v, t / 2);
  }
  let res = inner(x, n);
  if (res === 0) return 0;
  if (xx > 0) {
    if (nn > 0) return res;
    return 1 / res;
  }
  if (nn > 0) {
    if (nn % 2 === 0) return res;
    return -res;
  }
  if (nn % 2 === 0) return 1 / res;
  return -1 / res;
};

// log(2, 2, myPow);
// log(2, -2, myPow);
// log(-2, 2, myPow);
// log(2, 5, myPow);
// log(-2, 5, myPow);
// log(-2, -5, myPow);
// log(2, -5, myPow);

log(0.00001, 2147483647, myPow);
// log(0.99999999, 10000000, myPow);


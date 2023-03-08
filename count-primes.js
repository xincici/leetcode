/*
 * @Author      : linye
 * @Created At  : 2022-12-09 17:08:41
 * @Description : 204
 * https://leetcode.cn/problems/count-primes/
 */

require('./log');

/**
 * @param {number} n
 * @return {number}
 */
var isPrime = function(n) {
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};
var countPrimes = function(n) {
  let res = 1;
  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) res++;
  }
  return res;
};

log(10, countPrimes);
log(1000, countPrimes);
log(100000, countPrimes);

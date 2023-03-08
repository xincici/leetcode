/*
 * @Author      : linye
 * @Created At  : 2022-08-10 13:52:04
 * @Description : 2231
 * https://leetcode.cn/problems/largest-number-after-digit-swaps-by-parity/
 */

require('./log');

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
  if (num <= 12) return num;
  num = String(num);
  const a1 = num.replace(/[02468]/g, '').split('');
  const a2 = num.replace(/[13579]/g, '').split('');
  a1.sort((a, b) => b - a);
  a2.sort((a, b) => b - a);
  let res = '', i = j = 0;
  for (let idx = 0; idx < num.length; idx++) {
    if ('13579'.includes(num[idx])) res += a1[i++];
    else res += a2[j++];
  }
  return +res;
};

log(65875, largestInteger);

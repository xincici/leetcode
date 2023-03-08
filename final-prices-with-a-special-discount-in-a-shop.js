/*
 * @Author      : linye
 * @Created At  : 2022-09-01 09:52:40
 * @Description : 1475
 * https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/
 */

require('./log');

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let len = prices.length - 1;
  const res = [];
  const stack = [];
  while (len >= 0) {
    let cur = prices[len];
    while (stack.length && cur < stack[stack.length - 1]) {
      stack.pop();
    }
    res[len] = prices[len] - (stack[stack.length - 1] || 0);
    stack.push(cur);
    len--;
  }
  return res;
};

log([8,4,6,2,3], finalPrices);
log([1,2,3,4,5], finalPrices);
log([5,4,3,2,1], finalPrices);

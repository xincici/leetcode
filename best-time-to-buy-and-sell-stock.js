/*
 * @Author      : linye
 * @Created At  : 2022-09-13 13:44:17
 * @Description : 121
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 */

require('./log');

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0], diff = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      diff = Math.max(prices[i] - min, diff);
    }
  }
  return diff;
};

log([7,1,5,3,6,4], maxProfit)
log([7,6,5,4,3,2], maxProfit)

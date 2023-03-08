/*
 * @Author      : linye
 * @Created At  : 2022-09-30 19:02:36
 * @Description : 122
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 */

require('./log');

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  let res = 0, buy = sell = prices[0], cur;
  for (let i = 1; i < prices.length; i++) {
    cur = prices[i];
    if (cur >= sell) {
      sell = cur;
    } else if (cur < sell) {
      res += sell - buy;
      buy = sell = cur;
    }
  }
  res += sell - buy;
  return res;
};

const p1 = [7,1,5,3,6,4];
const p2 = [1,2,3,4,5]; 
const p3 = [5,4,3,2,1]; 
log(p1, maxProfit)
log(p2, maxProfit)
log(p3, maxProfit)

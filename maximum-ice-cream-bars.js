/*
 * @Author      : linye
 * @Created At  : 2022-08-26 18:06:13
 * @Description : 1833
 * https://leetcode.cn/problems/maximum-ice-cream-bars/
 */

require('./log');

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);
  let i = 0;
  while (i < costs.length) {
    if (coins < costs[i]) break;
    coins -= costs[i];
    i++;
  }
  return i;
};

log([1,3,2,4,1], 7, maxIceCream)

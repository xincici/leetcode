/*
 * @Author      : linye
 * @Created At  : 2022-07-14 14:47:24
 * @Description : 2073
 * https://leetcode.cn/problems/time-needed-to-buy-tickets/
 */

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

require('./log');

var timeRequiredToBuy = function(tickets, k) {
  let num = tickets[k];
  if (num === 1) return k + 1;
  let res = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (i < k) {
      res += Math.min(tickets[i], num);
    } else if(i > k) {
      res += Math.min(tickets[i], num - 1);
    } else {
      res += num;
    }
  }
  return res;
};

log([2,1,2,1], 2, timeRequiredToBuy);

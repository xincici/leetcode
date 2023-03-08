/*
 * @Author      : linye
 * @Created At  : 2022-07-27 17:23:03
 * @Description : 791
 * https://leetcode.cn/problems/custom-sort-string/
 */

require('./log');

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  return Array.from(s).sort((a, b) => {
    return order.indexOf(a) - order.indexOf(b);
  }).join('');
};

log('cbade', 'edagbsc', customSortString);

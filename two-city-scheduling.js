/*
 * @Author      : linye
 * @Created At  : 2022-09-21 19:27:09
 * @Description : 1029
 * https://leetcode.cn/problems/two-city-scheduling/
 */

require('./log');

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  const len = costs.length;
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
  let res = 0, half = len >> 1;
  for (let i = 0; i < len; i++) {
    res += costs[i][i < half ? 0 : 1];
  }
  return res;
};

const c1 = [[10,20],[30,200],[400,50],[30,20]];
const c2 = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]

log(c1, twoCitySchedCost)
log(c2, twoCitySchedCost)

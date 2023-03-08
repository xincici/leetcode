/*
 * @Author      : linye
 * @Created At  : 2022-08-22 19:09:10
 * @Description : 826
 * https://leetcode.cn/problems/most-profit-assigning-work/
 */

require('./log');

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  const pairs = difficulty.map((val, idx) =>([val, profit[idx]]));
  pairs.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    return b[0] - a[0];
  });
  worker.sort((a, b) => b - a);
  console.log({pairs, worker})
  let sum = 0;
  let last = 0;
  for (let i = 0; i < worker.length; i++) {
    for (let j = last; j < pairs.length; j++) {
      if (worker[i] >= pairs[j][0]) {
        last = j;
        sum += pairs[j][1];
        break;
      }
    }
  }
  return sum;
};

const difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]

log(difficulty, profit, worker, maxProfitAssignment)

/*
 * @Author      : linye
 * @Created At  : 2022-11-02 13:00:05
 * @Description : 322
 * https://leetcode.cn/problems/coin-change/
 */

require('./log');

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0;
  coins = coins.filter(v => v <= amount);
  if (!coins.length) return -1;
  const map = new Map();
  coins.forEach(val => map.set(val, 1));
  function dfs(left) {
    if (left < 0) return Infinity;
    if (left === 0) return 0;
    if (map.has(left)) return map.get(left);
    const tmp = Math.min.apply(null, coins.map(v => dfs(left - v))) + 1;
    map.set(left, tmp);
    return tmp;
  }
  const res = dfs(amount);
  return res === Infinity ? -1 : res;
};

var dpSolution = function(coins, amount) {
  if (amount === 0) return 0;
  coins = coins.filter(v => v <= amount);
  if (!coins.length) return -1;
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    dp[i] = Infinity;
    coins.forEach(val => {
      if (val > i) return;
      dp[i] = Math.min(dp[i], dp[i - val] + 1);
    });
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

log([2,5], 100, coinChange)
log([2], 3, coinChange)
log([2,5], 100, dpSolution)
log([2], 3, dpSolution)

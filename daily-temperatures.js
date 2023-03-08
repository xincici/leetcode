/*
 * @Author      : linye
 * @Created At  : 2022-09-19 20:26:00
 * @Description : 739
 * https://leetcode.cn/problems/daily-temperatures/
 */

require('./log');

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);
  const stack = [];
  for (let i = 0; i < len; i++) {
    let cur = temperatures[i];
    while (stack.length && cur > temperatures[stack[stack.length - 1]]) {
      let idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
};

const temperatures = [73,74,75,71,69,72,76,73];
log(temperatures, dailyTemperatures)

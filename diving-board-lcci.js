/*
 * @Author      : linye
 * @Created At  : 2022-08-15 16:02:24
 * @Description : 16.11
 * https://leetcode.cn/problems/diving-board-lcci/
 */

require('./log');

/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  if (k === 0) return [];
  if (shorter === longer) return [shorter * k];
  if (k === 1) return [shorter, longer];
  const res = [];
  for (let i = k; i >= 0; i--) {
    res.push(shorter * i + (k - i) * longer);
  }
  return res;
};

log(1, 3, 5, divingBoard)

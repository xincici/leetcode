/*
 * @Author      : linye
 * @Created At  : 2022-09-08 09:46:06
 * @Description : 667
 * https://leetcode.cn/problems/beautiful-arrangement-ii/
 */

require('./log');

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  if (k === 1) return new Array(n).fill(0).map((_, i) => i + 1);
  let start = 1, end = n, flag = true;
  const res = [];
  while (k > 1) {
    if (flag) {
      res.push(start);
      start++;
      flag = false;
    } else {
      res.push(end);
      end--;
      flag = true;
    }
    k--;
  }
  const length = end - start + 1;
  if (flag) return res.concat(Array.from({ length }, () => start++));
  return res.concat(Array.from({ length }, () => end--));
};

log(10, 2, constructArray);
log(10, 3, constructArray);
log(10, 5, constructArray);

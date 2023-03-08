/*
 * @Author      : linye
 * @Created At  : 2022-09-21 14:14:53
 * @Description : 120
 * https://leetcode.cn/problems/triangle/
 */

require('./log');

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const len = triangle.length;
  let res = [triangle[0][0]];
  function getLast(col) {
    if (col === 0) return res[0];
    if (col === res.length) return res[col - 1];
    return Math.min(res[col - 1], res[col]);
  }
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += getLast(j);
    }
    res = triangle[i];
  }
  return Math.min(...res);
};

const t = [[2],[3,4],[6,5,7],[4,1,8,3]]; 
log(t, minimumTotal)

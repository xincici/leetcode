/*
 * @Author      : linye
 * @Created At  : 2022-10-31 18:42:23
 * @Description : 84
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/
 */

require('./log');

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const len = heights.length;
  const r2l = new Array(len).fill(0);
  const l2r = new Array(len).fill(0);
  let res = 0, cur;
  const stack = [];
  for (let i = 0; i < len; i++) {
    cur = heights[i];
    while (stack.length && cur < heights[stack.at(-1)]) {
      const idx = stack.pop();
      r2l[idx] = i - idx - 1;
    }
    r2l[i] = len - i - 1;
    stack.push(i);
  }
  stack.length = 0;
  for (let i = len - 1; i >= 0; i--) {
    cur = heights[i];
    while (stack.length && cur < heights[stack.at(-1)]) {
      const idx = stack.pop();
      l2r[idx] = idx - i - 1;
    }
    l2r[i] = i;
    stack.push(i);
  }
  console.log({r2l, l2r})
  for (let i = 0; i < len; i++) {
    res = Math.max(res, (r2l[i] + l2r[i] + 1) * heights[i]);
  }
  return res;
};

const h1 = [2,1,5,6,2,3];
const h2 = [2,4]
log(h1, largestRectangleArea)
// log(h2, largestRectangleArea)

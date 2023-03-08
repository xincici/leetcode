/*
 * @Author      : linye
 * @Created At  : 2022-08-05 19:20:36
 * @Description : 1465
 * https://leetcode.cn/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 */

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let maxH = horizontalCuts[0];
  let maxW = verticalCuts[0];
  for (let i = 1; i < horizontalCuts.length; i++) {
    maxH = Math.max(horizontalCuts[i] - horizontalCuts[i - 1], maxH);
  }
  maxH = Math.max(h - horizontalCuts[horizontalCuts.length - 1], maxH);
  for (let i = 1; i < verticalCuts.length; i++) {
    maxW = Math.max(verticalCuts[i] - verticalCuts[i - 1], maxW);
  }
  maxW = Math.max(w - verticalCuts[verticalCuts.length - 1], maxW);
  return (BigInt(maxH) * BigInt(maxW)) % BigInt(1000000007);
};

console.log(maxArea(
1000000000,
1000000000,
[2],
[2]
))

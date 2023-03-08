/*
 * @Author      : linye
 * @Created At  : 2022-09-07 11:31:29
 * @Description : 888
 * https://leetcode.cn/problems/fair-candy-swap/
 */

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
  const sa = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const sb = bobSizes.reduce((acc, cur) => acc + cur, 0);
  const diff = sa - sb;
  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      if (aliceSizes[i] - bobSizes[j] === diff / 2) {
        return [aliceSizes[i], bobSizes[j]];
      }
    }
  }
};

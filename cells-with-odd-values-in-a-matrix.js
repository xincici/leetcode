/*
 * @Author      : linye
 * @Created At  : 2022-07-12 11:14:59
 * @Description : 1252
 * https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/
 */

require('../log')

var oddCells = function(m, n, indices) {
  let s1 = '';
  let s2 = '';
  indices.forEach(item => {
    const [row, col] = item;
    if (s1.includes('|' + row + '|')) s1 = s1.replace('|' + row + '|', '');
    else s1 = s1 + '|' + row + '|';
    if (s2.includes('|' + col + '|')) s2 = s2.replace('|' + col + '|', '');
    else s2 = s2 + '|' + col + '|';
  });
  s1 = s1.split('|').filter(Boolean).length;
  s2 = s2.split('|').filter(Boolean).length;
  return Math.abs(s1 * n - s2 * s1 + s2 * (m - s1));
};

log(28, 38, [[17,16],[26,31],[19,12],[22,24],[17,28],[23,21],[27,32],[23,27],[23,33],[18,7],[4,20],[0,31],[25,33],[5,22]], oddCells);

/*
 * @Author      : linye
 * @Created At  : 2022-09-07 09:51:02
 * @Description : 1592
 * https://leetcode.cn/problems/rearrange-spaces-between-words/
 */

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  const arr = text.trim().split(/\s+/);
  const sn = (text.match(/\s/g) || []).length;
  const diff = arr.length - 1;
  if (diff === 0) {
    return arr[0] + ' '.repeat(sn);
  }
  return arr.join(' '.repeat(~~(sn / diff))) + ' '.repeat(sn % diff);
};


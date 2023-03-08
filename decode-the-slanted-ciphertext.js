/*
 * @Author      : linye
 * @Created At  : 2022-07-19 20:06:03
 * @Description : 2075
 * https://leetcode.cn/problems/decode-the-slanted-ciphertext/
 */

require('./log');

/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
  if (rows === 1) return encodedText;
  const cols = encodedText.length / rows;
  let idx = 0 - cols;
  const arr = Array.from({ length: rows }, () => encodedText.substr(idx += cols, cols));
  let res = '';
  let round = 0;
  let i = j = 0;
  while (true) {
    if (i === rows) {
      i = 0;
      j = ++round;
    }
    if (!arr[i] || arr[i][j] === undefined) break;
    if (i === 0 && j > cols - rows + 1) break;
    res += arr[i][j];
    i++;
    j++;
  }
  return res.trimEnd();
};

log('iveo    eed   l te   olc', 4, decodeCiphertext);

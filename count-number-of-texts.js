/*
 * @Author      : linye
 * @Created At  : 2022-08-05 14:03:16
 * @Description : 2266
 * https://leetcode.cn/problems/count-number-of-texts/
 */

require('./log');

/**
 * @param {string} pressedKeys
 * @return {number}
 */

const DIV = BigInt(1000000007);

var calc3 = function(len) {
  const dp = [BigInt(1),BigInt(2),BigInt(4)];
  let i = 3;
  while (i < len) {
    dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % DIV;
    i++;
  }
  return dp[i - 1] || 1;
};

var calc4 = function(len) {
  const dp = [BigInt(1),BigInt(2),BigInt(4),BigInt(8)];
  let i = 4;
  while (i < len) {
    dp[i] = (dp[i - 4] + dp[i - 3] + dp[i - 2] + dp[i - 1]) % DIV;
    i++;
  }
  return dp[i - 1] || 1;
};

var calcOne = function(str) {
  const len = str.length;
  if (len < 3) return BigInt(len);
  if (len === 3) return BigInt(4);
  const char = str[0];
  if ('79'.includes(char)) return calc4(len);
  return calc3(len);
};

var countTexts = function(pressedKeys) {
  if (pressedKeys.length === 1) return 1;
  let last = pressedKeys[0];
  let str = last;
  let tmp = BigInt(1);
  for (let i = 1; i < pressedKeys.length; i++) {
    if (i === pressedKeys.length - 1) {
      if (pressedKeys[i] === last) str += last;
      tmp = BigInt(tmp * calcOne(str)) % DIV;
      break;
    }
    if (pressedKeys[i] === last) {
      str += last;
      continue;
    } else {
      tmp = BigInt(tmp * calcOne(str)) % DIV;
      str = last = pressedKeys[i];
    }
  }
  return tmp;
};

const s = "88888888888888888888888888888999999999999999999999999999994444444444444444444444444444488888888888888888888888888888555555555555555555555555555556666666666666666666666666666666666666666666666666666666666222222222222222222222222222226666666666666666666666666666699999999999999999999999999999888888888888888888888888888885555555555555555555555555555577777777777777777777777777777444444444444444444444444444444444444444444444444444444444433333333333333333333333333333555555555555555555555555555556666666666666666666666666666644444444444444444444444444444999999999999999999999999999996666666666666666666666666666655555555555555555555555555555444444444444444444444444444448888888888888888888888888888855555555555555555555555555555555555555555555555555555555555555555555555555555555555999999999999999555555555555555555555555555554444444444444444444444444444444555"

log("22233", countTexts);
log("444479999555588866", countTexts);
log(s, countTexts);

/*
 * @Author      : linye
 * @Created At  : 2022-07-26 17:42:00
 * @Description : 522
 * https://leetcode.cn/problems/longest-uncommon-subsequence-ii/
 */

/**
 * @param {string[]} strs
 * @return {number}
 */

const isSub = (short, long) => {
  if (short === long) return true;
  if (short.length > long.length) {
    [short, long] = [long, short];
  }
  let i = 0, j = 0;
  let res = false;
  while (i < short.length && j < long.length) {
    if (short[i] !== long[j]) {
      j++;
      continue;
    }
    i++;
    j++;
  }
  return i === short.length;
};

var findLUSlength = function(strs) {
  strs = strs.sort((a, b) => b.length - a.length);
  let res = -1;
  for (let i = 0; i < strs.length; i++) {
    const s1 = strs[i];
    let s2;
    let flag = true;
    for (let j = 0; j < strs.length; j++) {
      if (i === j) continue;
      s2 = strs[j];
      if (s2.length < s1.length) break;
      if (isSub(s2, s1)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res = s1.length;
      break;
    }
    flag = true;
  }
  return res;
};

/*
 * @Author      : linye
 * @Created At  : 2022-10-26 15:12:11
 * @Description : 139
 * https://leetcode.cn/problems/word-break/
 */

require('./log');

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const map = new Map();
  const lmap = new Map();
  wordDict.forEach(word => {
    map.set(word, 1);
    const prefix = word[0];
    if (lmap.has(prefix)) lmap.get(prefix).push(word);
    else lmap.set(prefix, [word]);
  });
  Array.from(lmap.keys()).forEach(key => {
    lmap.get(key).sort((a, b) => b.length - a.length);
  });
  let res = false;
  const mem = new Map();
  function inner(str) {
    if (res) return true;
    if (mem.has(str)) return;
    mem.set(str, 1);
    if (map.has(str)) return res = true;
    const prefix = str[0];
    if (!lmap.has(prefix)) return false;
    const arr = lmap.get(prefix);
    for (let i = 0; i < arr.length; i++) {
      if (res) return true;
      if (!str.startsWith(arr[i])) continue;
      inner(str.slice(arr[i].length));
    }
  }
  inner(s);
  return res;
};

var s1 = function(s, wordDict) {
  const map = new Map();
  wordDict.forEach(wd => map.set(wd, 1));
  const dp = new Array(s.length +  1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = i; j >= 1 && !dp[i]; j--) {
      const sub = s.substring(j - 1, i);
      if (map.has(sub)) dp[i] = dp[j - 1];
    }
  }
  console.log({dp})
  return dp[s.length];
};

log("applepenapple", ["apple","pen"], wordBreak)
log("applepenapple", ["apple","pen"], s1)





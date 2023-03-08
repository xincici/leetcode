/*
 * @Author      : linye
 * @Created At  : 2022-09-02 16:36:14
 * @Description : 49
 * https://leetcode.cn/problems/group-anagrams/
 */

require('./log');

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const res = [];
  const map = {};
  const copy = strs.map(str => {
    return str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  });
  let mk = 0;
  for (let i = 0; i < copy.length; i++) {
    let idx = map[copy[i]];
    if (idx !== undefined) {
      res[idx].push(strs[i]);
    } else {
      map[copy[i]] = mk++;
      res.push([strs[i]]);
    }
  }
  return res;
};

// const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
const arr = ["a"]

log(arr, groupAnagrams)

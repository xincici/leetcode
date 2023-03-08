/*
 * @Author      : linye
 * @Created At  : 2022-09-01 17:42:52
 * @Description : 2343
 * https://leetcode.cn/problems/query-kth-smallest-trimmed-number/
 */

require('./log');

/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

var compare = (s1, s2) => {
  if (s1 === s2) return 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    return +s1[i] - +s2[i];
  }
};
var smallestTrimmedNumbers = function(nums, queries) {
  const res = [];
  for (let i = 0; i < queries.length; i++) {
    const [idx, trim] = queries[i];
    const tmp = nums.map((v, i) => [v.slice(-trim), i]);
    res.push(tmp.sort((a, b) => compare(a[0], b[0]))[idx - 1][1]);
  }
  return res;
};

const nums = ["24","37","96","04"]
const queries = [[2,1],[2,2]]
// const nums = ["24","37","96","04"], queries = [[2,1],[2,2]]
// const nums = ["22222222222222222222222222222222222222222222222225","22222222222222222222222222222222222222222222222221","22222222222222222222222222222222222222222222222223","22222222222222222222222222222222222222222222222228","22222222222222222222222222222222222222222222222226"]
// const queries = [[1,40],[3,40],[2,40],[5,40],[4,40]]
log(nums, queries, smallestTrimmedNumbers)

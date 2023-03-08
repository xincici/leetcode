/*
 * @Author      : linye
 * @Created At  : 2022-08-01 12:36:52
 * @Description : 216
 * https://leetcode.cn/problems/combination-sum-iii/
 */

require('./log');

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let ans = [];
  let nums = new Array(9).fill(0).map((v, i) => i + 1);

  // 回溯
  function backtrack(curr, temp) {
    if (curr.length > k) return;
    const sum = curr.reduce((p, c) => p + c, 0);
    if (sum > n) return;

    // 如果长度够了，判断是否符合条件，结束递归
    if (curr.length === k && sum === n) {
      ans.push([...curr]);
      return;
    }

    // 回溯
    for (let i = 0; i < temp.length; i++) {
      curr.push(temp[i]);
      backtrack(curr, temp.slice(i + 1));
      curr.pop();
    }
  };
  backtrack([], nums);

  return ans;
};

var fn = function(k, n) {
  const cur = [];
  const res = [];
  const nums = new Array(9).fill(1).map((_, i) => i + 1);
  function backtrack(start) {
    if (cur.length > k) return;
    const sum = cur.reduce((s, p) => s + p, 0);
    if (sum > n) return;
    if (cur.length === k && sum === n) return res.push([...cur]);
    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i]);
      backtrack(i + 1);
      cur.pop();
    }
  }
  backtrack(0);
  return res;
};

// log(6, 28, combinationSum3);
log(3, 10, fn);

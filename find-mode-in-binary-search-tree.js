/*
 * @Author      : linye
 * @Created At  : 2022-09-15 18:33:31
 * @Description : 501
 * https://leetcode.cn/problems/find-mode-in-binary-search-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let last = -Infinity;
  let cur = 0;
  let max = 0;
  const res = [];
  function dfs(node) {
    if (node.left) dfs(node.left);
    if (last === node.val) cur++;
    else {
      cur = 1;
      last = node.val;
    }
    if (cur > max) {
      res.length = 0;
      res.push(node.val);
      max = cur;
    } else if (cur === max) {
      res.push(node.val);
    }
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res;
};

const t1 = a2t([1,null,2,null,null,2]);
log(t1, findMode)

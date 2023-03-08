/*
 * @Author      : linye
 * @Created At  : 2022-09-22 14:20:57
 * @Description : 1448
 * https://leetcode.cn/problems/count-good-nodes-in-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
  let res = 0;
  function dfs(node, max) {
    if (node.val >= max) res++;
    max = Math.max(node.val, max);
    if (node.left) dfs(node.left, max);
    if (node.right) dfs(node.right, max);
  }
  dfs(root, -Infinity);
  return res;
};

const root = a2t([3,1,4,3,null,1,5]);
log(root, goodNodes)

/*
 * @Author      : linye
 * @Created At  : 2022-08-16 11:02:10
 * @Description : 515
 * https://leetcode.cn/problems/find-largest-value-in-each-tree-row/
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];
  const res = [];
  function dfs(node, level) {
    res[level] = (level in res) ? Math.max(res[level], node.val) : node.val;
    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return res;
};

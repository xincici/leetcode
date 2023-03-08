/*
 * @Author      : linye
 * @Created At  : 2022-09-05 17:19:46
 * @Description : 113
 * https://leetcode.cn/problems/path-sum-ii/
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (!root) return [];
  const res = [];
  function dfs(node, sum, path) {
    let prefix = path ? path + ',' : '';
    if (!node.left && !node.right) {
      if (sum + node.val === targetSum) {
        res.push(prefix + node.val);
      }
    }
    if (node.left) dfs(node.left, sum + node.val, prefix + node.val);
    if (node.right) dfs(node.right, sum + node.val, prefix + node.val);
  }
  dfs(root, 0, '');
  return res.map(str => str.split(',').map(v => +v));
};

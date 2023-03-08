/*
 * @Author      : linye
 * @Created At  : 2022-09-22 15:40:23
 * @Description : 1161
 * https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  const tmp = [];
  function dfs(node, dep) {
    tmp[dep] = (tmp[dep] || 0) + node.val;
    if (node.left) dfs(node.left, dep + 1);
    if (node.right) dfs(node.right, dep + 1);
  }
  dfs(root, 0);
  let res, max = -Infinity;
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] > max) {
      res = i + 1;
      max = tmp[i];
    }
  }
  return res;
};

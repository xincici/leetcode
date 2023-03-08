/*
 * @Author      : linye
 * @Created At  : 2022-09-16 09:56:12
 * @Description : 543
 * https://leetcode.cn/problems/diameter-of-binary-tree/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  let max = -Infinity;
  function dfs(node) {
    if (!node) return 0;
    const l = dfs(node.left);
    const r = dfs(node.right);
    max = Math.max(max, l + r + 1);
    return Math.max(l, r) + 1;
  }
  return Math.max(dfs(root), max) - 1;
};

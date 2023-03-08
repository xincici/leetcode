/*
 * @Author      : linye
 * @Created At  : 2022-08-19 17:49:01
 * @Description : 637
 * https://leetcode.cn/problems/average-of-levels-in-binary-tree/
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const sum = [];
  const cnt = [];
  function dfs(node, level) {
    if (!node) return;
    sum[level] = (sum[level] || 0) + node.val;
    cnt[level] = (cnt[level] || 0) + 1;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return sum.map((val, idx) => sum / cnt[idx]);
};

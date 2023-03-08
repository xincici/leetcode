/*
 * @Author      : linye
 * @Created At  : 2022-09-02 11:08:21
 * @Description : 112
 * https://leetcode.cn/problems/path-sum/
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  let res = false;
  function dfs(node, pre) {
    if (res) return;
    const {left, right, val} = node;
    if (!left && !right && val + pre === targetSum) return res = true;
    if (left) dfs(left, pre + val);
    if (right) dfs(right, pre + val);
  }
  dfs(root, 0);
  return res;
};

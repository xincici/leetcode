/*
 * @Author      : linye
 * @Created At  : 2022-09-16 18:28:53
 * @Description : 701
 * https://leetcode.cn/problems/insert-into-a-binary-search-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  let flag  = false;
  function dfs(node) {
    if (flag) return;
    if (node.val < val) {
      if (!node.right) {
        node.right = new TreeNode(val);
        return flag = true;
      } else dfs(node.right);
    }
    if (node.val > val) {
      if (!node.left) {
        node.left = new TreeNode(val);
        return flag = true;
      } else dfs(node.left);
    }
  }
  dfs(root);
  return root;
};

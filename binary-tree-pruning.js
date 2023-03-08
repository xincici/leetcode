/*
 * @Author      : linye
 * @Created At  : 2022-07-21 12:30:44
 * @Description : 814
 * https://leetcode.cn/problems/binary-tree-pruning/
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  if (root.left) root.left = pruneTree(root.left);
  if (root.right) root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) return null;
  return root;
};

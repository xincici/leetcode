/*
 * @Author      : linye
 * @Created At  : 2022-09-22 14:41:57
 * @Description : 1110
 * https://leetcode.cn/problems/delete-nodes-and-return-forest/
 */

/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  const set = new Set([root]);
  function dfs(node) {
    if (!node) return null;
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    if (to_delete.includes(node.val)) {
      if (node.left) set.add(node.left);
      if (node.right) set.add(node.right);
      if (set.has(node)) {
        set.delete(node);
      }
      return null;
    }
    return node;
  }
  dfs(root);
  return Array.from(set);
};

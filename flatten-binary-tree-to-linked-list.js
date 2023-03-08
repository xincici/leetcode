/*
 * @Author      : linye
 * @Created At  : 2022-07-11 17:48:08
 * @Description : 114
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
  if (!root || !root.left && !root.right) return root;
  const tmp = [];
  function dfs(node) {
    tmp.push(node);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  for (let i =  0; i < tmp.length; i++) {
    tmp[i].left = null;
    tmp[i].right = tmp[i + 1] || null;
  }
};

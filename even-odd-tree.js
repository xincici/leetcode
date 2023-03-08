/*
 * @Author      : linye
 * @Created At  : 2022-09-19 16:53:25
 * @Description : 1609
 * https://leetcode.cn/problems/even-odd-tree/
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
  let res = true;
  const tmp = [];
  function dfs(node, level) {
    if (!res) return;
    if (level % 2 === node.val % 2) return res = false;
    if (!tmp[level]) tmp[level] = node.val;
    else {
      if (level % 2 === 0) {
        if (tmp[level] >= node.val) return res = false;
      } else {
        if (tmp[level] <= node.val) return res = false;
      }
      tmp[level] = node.val;
    }
    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return res;
};

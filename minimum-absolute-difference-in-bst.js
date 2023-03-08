/*
 * @Author      : linye
 * @Created At  : 2022-09-15 19:29:51
 * @Description : 530
 * https://leetcode.cn/problems/minimum-absolute-difference-in-bst/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let last = -Infinity;
  let res = Infinity, flag = false;
  function dfs(node) {
    if (node.left) dfs(node.left);
    if (flag) return;
    if (node.val - last === 1) {
      flag = true;
      return res = 1;
    } else {
      res = Math.min(res, node.val - last);
      last = node.val;
    }
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res;
};

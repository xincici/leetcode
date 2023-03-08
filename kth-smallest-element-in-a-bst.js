/*
 * @Author      : linye
 * @Created At  : 2022-09-15 11:48:25
 * @Description : 230
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let cnt = 0;
  let res;
  let flag = false;
  function dfs(node) {
    if (node.left) dfs(node.left);
    if (flag) return;
    if (++cnt === k) {
      res = node.val;
      return flag = true;
    }
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res;
};

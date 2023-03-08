/*
 * @Author      : linye
 * @Created At  : 2022-07-18 15:42:21
 * @Description : 572
 * https://leetcode.cn/problems/subtree-of-another-tree/
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */


var isSubtree = function(root, subRoot) {
  function check(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2 || t1.val !== t2.val) return false;
    return check(t1.left, t2.left) && check(t1.right, t2.right);
  }
  function dfs(node) {
    if (!node) return false;
    return check(node, subRoot) || dfs(node.left, subRoot) || dfs(node.right, subRoot);
  }
  return dfs(root);
};

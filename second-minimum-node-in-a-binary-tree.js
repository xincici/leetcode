/*
 * @Author      : linye
 * @Created At  : 2022-09-16 17:55:27
 * @Description : 671
 * https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let m1 = m2 = 0;
  function dfs(node) {
    if (!m1) m1 = node.val;
    else if (m1 !== node.val) {
      if (!m2) m2 = node.val;
      else m2 = Math.min(m2, node.val);
    }
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return m2 ? m2 : -1;
}

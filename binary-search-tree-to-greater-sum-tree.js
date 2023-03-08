/*
 * @Author      : linye
 * @Created At  : 2022-08-30 18:15:55
 * @Description : 1038
 * https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let tmp = 0;
  function dfs(node) {
    if (node.right) dfs(node.right);
    tmp += node.val;
    node.val = tmp;
    if (node.left) dfs(node.left);
  }
  dfs(root);
};

/*
 * @Author      : linye
 * @Created At  : 2022-09-08 18:02:03
 * @Description : 124
 * https://leetcode.cn/problems/binary-tree-maximum-path-sum/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let res = -Infinity;
  function dfs(node) {
    if (!node) return 0;
    let mleft = dfs(node.left);
    let mright = dfs(node.right);
    let sum = mleft + mright + node.val;
    let sleft = mleft + node.val;
    let sright = mright + node.val;
    res = Math.max(node.val, sum, sleft, sright, res);
    let max = Math.max(sleft, sright, node.val);
    if (max <= 0) return 0;
    return max;
  }
  dfs(root);
  return res;
};

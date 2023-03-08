/*
 * @Author      : linye
 * @Created At  : 2022-09-02 09:39:18
 * @Description : 687
 * https://leetcode.cn/problems/longest-univalue-path/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let res = 0;
  function height(node, pv) {
    if (!node) return 0;
    const val = node.val;
    if (val !== pv) return 0;
    if (val === pv) return Math.max(height(node.left, val) + 1, height(node.right, val) + 1);
  }
  function dfs(node) {
    if (!node) return;
    const val = node.val;
    res = Math.max(res, height(node.left, val) + height(node.right, val));
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res;
};

const t1 = a2t([5,4,5,1,1,null,5])
const t2 = a2t([1,4,5,4,4,null,5,4,4])

log(t1, longestUnivaluePath)
log(t2, longestUnivaluePath)

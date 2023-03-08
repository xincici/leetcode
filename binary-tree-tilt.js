/*
 * @Author      : linye
 * @Created At  : 2022-09-16 14:47:49
 * @Description : 563
 * https://leetcode.cn/problems/binary-tree-tilt/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  if (!root) return 0;
  let res = 0;
  function dfs(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return node.val;
    let lv = dfs(node.left);
    let rv = dfs(node.right);
    res += Math.abs(lv - rv);
    return lv + rv + node.val;
  }
  dfs(root);
  return res;
};

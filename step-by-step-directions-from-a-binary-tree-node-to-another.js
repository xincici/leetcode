/*
 * @Author      : linye
 * @Created At  : 2022-09-23 18:35:25
 * @Description : 2096
 * https://leetcode.cn/problems/step-by-step-directions-from-a-binary-tree-node-to-another/
 */

/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
  let start, dest;
  function dfs(node, path) {
    if (start !== undefined && dest !== undefined) return;
    if (node.val === startValue) start = path;
    if (node.val === destValue) dest = path;
    if (node.left) dfs(node.left, `${path}L`);
    if (node.right) dfs(node.right, `${path}R`);
  }
  dfs(root, '');
  let idx = 0;
  while (start[idx] === dest[idx]) {
    idx++;
  }
  return 'U'.repeat(start.length - idx) + dest.slice(idx);
};

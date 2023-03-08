/*
 * @Author      : linye
 * @Created At  : 2022-08-23 19:02:27
 * @Description : 04.05
 * https://leetcode.cn/problems/legal-binary-search-tree-lcci/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  function inner(node, low, up) {
    if (!node) return true;
    if (node.val <= low || node.val >= up) return false; 
    return inner(node.left, low, node.val) && inner(node.right, node.val, up);
  }
  return inner(root, -Infinity, Infinity);
}
var isValidBST_1 = function(root) {
  if (!root) return true;
  let last = null;
  let res = true;
  function dfs(node) {
    if (!res) return;
    if (node.left) dfs(node.left);
    const val = node.val;
    if (last === null) last = val;
    else if (last >= val) return res = false;
    else last = val;
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res;
};

const t1 = a2t([5,3,7,2,4,6,8]);
const t2 = a2t([5,1,4,null,null,3,6]);

log(t1, isValidBST);
// log(t2, isValidBST);

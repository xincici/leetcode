/*
 * @Author      : linye
 * @Created At  : 2022-09-09 10:34:11
 * @Description : 1080
 * https://leetcode.cn/problems/insufficient-nodes-in-root-to-leaf-paths/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
  let res = root;
  function dfs(node, parent, path, pre) {
    if (!node) return true;
    pre += node.val;
    if (!node.left && !node.right) {
      return pre < limit;
    }
    let lv = dfs(node.left, node, path, pre);
    if (lv) node.left = null;
    let rv = dfs(node.right, node, path, pre);
    if (rv) node.right = null;
    if (lv && rv) {
      if (!parent) return res = null;
      if (path) parent[path] = null;
      return true;
    }
    return false;
  }
  dfs(root, null, '', 0);
  return res;
};

const r1 = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14];
const r2 = [3,-5,-6];

log(a2t(r1), 1, sufficientSubset);
log(a2t(r2), 0, sufficientSubset);

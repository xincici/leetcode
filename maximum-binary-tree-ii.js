/*
 * @Author      : linye
 * @Created At  : 2022-08-24 20:33:56
 * @Description : 998
 * https://leetcode.cn/problems/maximum-binary-tree-ii/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
  const nd = new TreeNode(val);
  if (val > root.val) {
    nd.left = root;
    return nd;
  }
  function dfs(node, parent) {
    if (!node) {
      parent.right = nd;
      return;
    }
    if (val > node.val) {
      parent.right = nd;
      nd.left = node;
      return;
    }
    dfs(node.right, node);
  }
  dfs(root.right, root);
  return root;
};

const t1 = a2t([4,1,3,null,null,2]);
const t2 = a2t([5,2,4,null,1]);
const t3 = a2t([5,2,3,null,1]);

log(t1, 5, insertIntoMaxTree);
log(t2, 3, insertIntoMaxTree);
log(t3, 4, insertIntoMaxTree);

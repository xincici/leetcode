/*
 * @Author      : linye
 * @Created At  : 2022-08-08 18:12:05
 * @Description : 110
 * https://leetcode.cn/problems/balanced-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;
  let res = true;
  function dfs(node) {
    if (!res) return;
    let l = r = 0;
    function inner(nd, isLeft, level) {
      if (isLeft) l = Math.max(l, level);
      else r = Math.max(r, level);
      if (nd.left) inner(nd.left, isLeft, level + 1);
      if (nd.right) inner(nd.right, isLeft, level + 1);
    }
    node.left && inner(node.left, true, 1);
    node.right && inner(node.right, false, 1);
    if (Math.abs(l - r) > 1) return res = false;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return res;
};

const tree = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
    }
  }
};

log(tree, isBalanced)

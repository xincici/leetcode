/*
 * @Author      : linye
 * @Created At  : 2022-07-19 14:23:32
 * @Description : 
 * https://leetcode.cn/problems/successor-lcci/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  let flag = 0;
  let res = null;
  function dfs(tree) {
    if (flag === 2) return;
    if (tree.left) dfs(tree.left);
    if (flag === 1) {
      res = tree;
      flag++;
      return;
    }
    if (tree.val === p.val) flag++;
    if (tree.right) dfs(tree.right);
  }
  dfs(root);
  return res;
};

const tree = a2t([5,3,6,2,4,null,null,1]);
const target = a2t([4]);

log(tree, target, inorderSuccessor);

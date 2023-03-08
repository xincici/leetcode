/*
 * @Author      : linye
 * @Created At  : 2022-09-13 18:21:18
 * @Description : 450
 * https://leetcode.cn/problems/delete-node-in-a-bst/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return null;
  let res = root, flag = false;
  function dfs(node, parent, path) {
    if (flag) return;
    if (node.val === key) {
      flag = true;
      if (!node.left || !node.right) {
        if (!parent) return res = (node.left || node.right);
        return parent[path] = (node.left || node.right);
      }
      if (!parent) res = node.left;
      else parent[path] = node.left;
      let cur = node.left;
      while (cur.right) {
        cur = cur.right;
      }
      cur.right = node.right;
      return;
    }
    if (node.left) dfs(node.left, node, 'left');
    if (node.right) dfs(node.right, node, 'right');
  }
  dfs(root);
  return res;
};

const root = [5,3,6,2,4,null,7], key = 3;

console.log(JSON.stringify(deleteNode(a2t(root), key), null, 2))

/*
 * @Author      : linye
 * @Created At  : 2022-09-27 18:45:31
 * @Description : 04.08
 * https://leetcode.cn/problems/first-common-ancestor-lcci/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var s1 = function(root, p, q) {
  let p1, p2;
  function dfs(node, path) {
    if (p1 && p2) return;
    if (node === p) p1 = path;
    if (node === q) p2 = path;
    if (node.left) dfs(node.left, `${path}.left`);
    if (node.right) dfs(node.right, `${path}.right`);
  }
  dfs(root, 'root');
  p1 = p1.split('.').slice(1);
  p2 = p2.split('.').slice(1);
  let idx = 0, res = root;
  while (true) {
    if (p1[idx] === p2[idx]) {
      res = res[p1[idx]];
      idx++;
      continue;
    }
    return res;
  }
};

var lowestCommonAncestor = function(root, p, q) {
  let res;
  function dfs(node) {
    if (res) return [false, false];
    if (!node) return [false, false];
    let [lp, lq] = dfs(node.left);
    let [rp, rq] = dfs(node.right);
    if (node === p) {
      if (lq || rq) {
        res = node;
        return [false, false];
      }
      return [true, false];
    }
    if (node === q) {
      if (lp || rp) {
        res = node;
        return [false, false];
      }
      return [false, true];
    }
    if (lp && rq || lq && rp) {
      res = node;
      return [false, false];
    }
    return [lp || rp, lq || rq];
  }
  dfs(root);
  return res;
};

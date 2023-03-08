/*
 * @Author      : linye
 * @Created At  : 2022-09-16 10:14:38
 * @Description : 449
 * https://leetcode.cn/problems/serialize-and-deserialize-bst/
 */

require('./log');

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';
  const t1 = [], t2 = [];
  function dfs(node) {
    t1.push(node.val);
    if (node.left) dfs(node.left);
    t2.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return `${t1.join()}|${t2.join()}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null;
  let [a1, a2] = data.split('|');
  a1 = a1.split(',').map(v => +v);
  a2 = a2.split(',').map(v => +v);
  function build(po, io) {
    if (!po.length) return null;
    const val = po[0];
    const node = new TreeNode(val);
    const idx = io.indexOf(val);
    node.left = build(po.slice(1, idx + 1), io.slice(0, idx));
    node.right = build(po.slice(idx + 1), io.slice(idx + 1));
    return node;
  }
  return build(a1, a2);
};

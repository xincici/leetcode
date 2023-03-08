/*
 * @Author      : linye
 * @Created At  : 2022-09-13 15:43:16
 * @Description : 105
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

require('./log');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function build(po, io) {
    if (!po.length) return null;
    const val = po[0];
    const node = new TreeNode(val);
    const idx = io.indexOf(val);
    node.left = build(po.slice(1, idx + 1), io.slice(0, idx));
    node.right = build(po.slice(idx + 1), io.slice(idx + 1));
    return node;
  }
  return build(preorder, inorder);
};

const preorder = [3,9,1,2,20,15,7], inorder = [1,9,2,3,15,20,7];

const res = buildTree(preorder, inorder);
console.log(JSON.stringify(res, null, 2))

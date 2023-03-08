/*
 * @Author      : linye
 * @Created At  : 2022-09-13 17:09:50
 * @Description : 106
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */

require('./log');

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  function build(io, po) {
    if (!po.length) return null;
    const len = po.length;
    const val = po[len - 1];
    const node = new TreeNode(val);
    const idx = io.indexOf(val);
    node.left = build(io.slice(0, idx), po.slice(0, idx));
    node.right = build(io.slice(idx + 1), po.slice(idx, len - 1));
    return node;
  }
  return build(inorder, postorder);
};

const inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]

console.log(JSON.stringify(buildTree(inorder, postorder), null, 2))

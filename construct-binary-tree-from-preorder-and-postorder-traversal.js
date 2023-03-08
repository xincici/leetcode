/*
 * @Author      : linye
 * @Created At  : 2022-09-14 12:45:07
 * @Description : 889
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 */

require('./log');

/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  function build(p1, p2) {
    if (!p1.length) return null;
    if (p1.length === 1) return new TreeNode(p1[0]);
    const node = new TreeNode(p1[0]);
    const val = p1[1];
    const idx = p2.indexOf(val);
    node.left = build(p1.slice(1, idx + 2), p2.slice(0, idx + 1));
    node.right = build(p1.slice(idx + 2), p2.slice(idx + 1, p2.length - 1));
    return node;
  }
  return build(preorder, postorder);
};

const preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1];

console.log(JSON.stringify(constructFromPrePost(preorder, postorder), null, 2))

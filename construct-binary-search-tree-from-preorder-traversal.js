/*
 * @Author      : linye
 * @Created At  : 2022-08-15 11:54:44
 * @Description : 1008
 * https://leetcode.cn/problems/construct-binary-search-tree-from-preorder-traversal/
 */

require('./log');

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  function inner(start, end) {
    if (start > end) return null;
    if (start === end) return new TreeNode(preorder[start]);
    const val = preorder[start];
    const node = new TreeNode(val);
    let i = start + 1;
    for (; i <= end; i++) {
      if (preorder[i] > val) break;
    }
    node.left = inner(start + 1, i - 1);
    node.right = inner(i, end);
    return node;
  }
  return inner(0, preorder.length - 1);
};

const preorder = [8,5,1,7,10,12];

log(preorder, bstFromPreorder);

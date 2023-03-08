/*
 * @Author      : linye
 * @Created At  : 2022-08-11 11:27:20
 * @Description : 1315
 * https://leetcode.cn/problems/sum-of-nodes-with-even-valued-grandparent/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var even = val => val % 2 === 0;
var sumEvenGrandparent = function(root) {
  let res = 0;
  function dfs(node, grand, parent) {
    if (grand) res += node.val;
    if (node.left) dfs(node.left, parent, even(node.val));
    if (node.right) dfs(node.right, parent, even(node.val));
  }
  dfs(root, false, false);
  return res;
};

const arr = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5];

log(a2t(arr), sumEvenGrandparent);

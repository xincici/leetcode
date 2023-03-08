/*
 * @Author      : linye
 * @Created At  : 2022-09-23 16:12:36
 * @Description : 1457
 * https://leetcode.cn/problems/pseudo-palindromic-paths-in-a-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
  let res = 0;
  const map = new Map();
  function dfs(node) {
    if (map.has(node.val)) map.delete(node.val);
    else map.set(node.val, true);
    if (!node.left && !node.right) {
      if (map.size === 1 || map.size === 0) res++;
    }
    if (node.left) dfs(node.left, map);
    if (node.right) dfs(node.right, map);
    if (map.has(node.val)) map.delete(node.val);
    else map.set(node.val, true);
  }
  dfs(root);
  return res;
};

const t1 = a2t([2,3,1,3,1,null,1])
log(t1, pseudoPalindromicPaths)

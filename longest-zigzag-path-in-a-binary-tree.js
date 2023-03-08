/*
 * @Author      : linye
 * @Created At  : 2022-09-22 19:37:40
 * @Description : 1372
 * https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
  let res = 0;
  function dfs(node, path, isLeft) {
    res = Math.max(res, path);
    if (node.left) {
      if (isLeft) dfs(node.left, 1, true);
      else {
        res = Math.max(res, path + 1);
        dfs(node.left, path + 1, true);
      }
    }
    if (node.right) {
      if (isLeft) {
        res = Math.max(res, path + 1);
        dfs(node.right, path + 1, false);
      }
      else dfs(node.right, 1, false);
    }
  }
  root.left && dfs(root.left, 1, true);
  root.right && dfs(root.right, 1, false);
  return res;
};

const t = a2t([1,1,1,1,null,null,1]);
log(t, longestZigZag)

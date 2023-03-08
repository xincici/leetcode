/*
 * @Author      : linye
 * @Created At  : 2022-09-19 18:20:25
 * @Description : 1026
 * https://leetcode.cn/problems/maximum-difference-between-node-and-ancestor/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  let res = -Infinity;
  function dfs(node, arg) {
    const arr = [...arg];
    if (!arr.length) {
      arr.push(node.val);
    } else if (arr.length === 1) {
      const opt = node.val > arr[0] ? 'unshift' : 'push';
      arr[opt](node.val);
      res = Math.max(res, arr[0] - arr[1]);
    } else {
      if (node.val > arr[0]) {
        arr[0] = node.val;
      } else if (node.val < arr[1]) {
        arr[1] = node.val;
      }
      res = Math.max(res, arr[0] - arr[1]);
    }
    if (node.left) dfs(node.left, arr);
    if (node.right) dfs(node.right, arr);
  }
  dfs(root, []);
  return res;
};

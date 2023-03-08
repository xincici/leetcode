/*
 * @Author      : linye
 * @Created At  : 2022-09-16 10:42:13
 * @Description : 437
 * https://leetcode.cn/problems/path-sum-iii/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  const map = new Map();
  let res = 0;
  function dfs(node, sum, start) {
    if (start && map.get(node)) return;
    if (start) map.set(node, true);
    sum += node.val;
    console.log({sum})
    if (sum === targetSum) res++;
    if (node.left) {
      dfs(node.left, 0, true);
      dfs(node.left, sum);
    }
    if (node.right) {
      dfs(node.right, 0, true);
      dfs(node.right, sum);
    }
  }
  dfs(root, 0);
  return res;
};

const r1 = a2t([10,5,-3,3,2,null,11,3,-2,null,1]);
const r2 = a2t([0,1,1]);

log(r1, 8, pathSum);
log(r2, 1, pathSum);

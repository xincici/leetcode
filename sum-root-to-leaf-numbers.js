/*
 * @Author      : linye
 * @Created At  : 2022-08-25 13:09:31
 * @Description : 129
 * https://leetcode.cn/problems/sum-root-to-leaf-numbers/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumNumbers = function(root) {
  let res = 0;
  function dfs(node, path) {
    const np = path * 10 + node.val;
    if (!node.left && !node.right) return res += np;
    if (node.left) dfs(node.left, np);
    if (node.right) dfs(node.right, np);
  }
  dfs(root, 0);
  return res;
};

var sumNumbers_1 = function(root) {
  function dfs(node, pv) {
    if (!node) return 0;
    const np = pv * 10 + node.val;
    if (!node.left && !node.right) return np;
    return dfs(node.left, np) + dfs(node.right, np);
  }
  return dfs(root, 0);
};

const t1 = a2t([1,2,3,4,5]);
const t2 = a2t([1]);
log(t1, sumNumbers)
log(t2, sumNumbers)

/*
 * @Author      : linye
 * @Created At  : 2022-09-22 17:55:36
 * @Description : 1339
 * https://leetcode.cn/problems/maximum-product-of-splitted-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
  let sum = 0;
  const set = new Set();
  function dfs(node) {
    if (!node) return 0;
    sum += node.val;
    const ls = dfs(node.left);
    const rs = dfs(node.right);
    const total = ls + rs + node.val;
    set.add(ls);
    set.add(rs);
    set.add(total);
    return total;
  }
  dfs(root);
  const arr = Array.from(set).sort((a, b) => a - b);
  let diff = Infinity, i = 0;
  for (; i < arr.length; i++) {
    if (Math.abs(sum - 2 * arr[i]) < diff) {
      diff = Math.abs(sum - 2 * arr[i]);
    } else break;
  }
  return arr[i - 1] * (sum - arr[i - 1]) % (1e9 + 7);
};

const t = a2t([1,2,3,4,5,6]);

log(t, maxProduct);

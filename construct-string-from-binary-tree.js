/*
 * @Author      : linye
 * @Created At  : 2022-09-16 15:56:55
 * @Description : 606
 * https://leetcode.cn/problems/construct-string-from-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {
  function dfs(node) {
    if (!node) return '';
    if (!node.left && !node.right) return `(${node.val})`;
    if (node.right && !node.left) return `(${node.val}()${dfs(node.right)})` 
    const lv = dfs(node.left);
    const rv = dfs(node.right);
    return `(${node.val}${lv}${rv})`;
  }
  return dfs(root).slice(1, -1);
};

const t1 = a2t([1,2,3,null,4]);

log(t1, tree2str)

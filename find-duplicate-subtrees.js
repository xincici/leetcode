/*
 * @Author      : linye
 * @Created At  : 2022-09-05 10:16:31
 * @Description : 652
 * https://leetcode.cn/problems/find-duplicate-subtrees/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const map = {};
  const res = [];
  function dfs(node) {
    if (!node) return ' ';
    let key = node.val + '_';
    key += dfs(node.left);
    key += dfs(node.right);
    if (map[key]) {
      map[key]++;
      if (map[key] === 2) res.push(node);
    } else {
      map[key] = 1;
    }
    return key;
  }
  dfs(root);
  return res;
};

const t1 = a2t([1,2,3,4,null,2,4,null,null,null,null,4]);
log(t1, findDuplicateSubtrees);

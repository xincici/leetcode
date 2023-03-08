/*
 * @Author      : linye
 * @Created At  : 2022-09-23 11:16:41
 * @Description : 1379
 * https://leetcode.cn/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 */

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let tmp;
  function dfs(node, path) {
    if (tmp) return;
    if (node === target) return tmp = path;
    if (node.left) dfs(node.left, `${path}.left`);
    if (node.right) dfs(node.right, `${path}.right`);
  }
  dfs(original, 'root');
  let res = cloned;
  tmp = tmp.split('.');
  for (let i = 1; i < tmp.length; i++) {
    res = res[tmp[i]];
  }
  return res;
};

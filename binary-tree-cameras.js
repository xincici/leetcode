/*
 * @Author      : linye
 * @Created At  : 2022-10-25 20:13:58
 * @Description : 968
 * https://leetcode.cn/problems/binary-tree-cameras/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
  let res = 0;
  function dfs(node) {
    if (!node) return 0;
    const l = dfs(node.left);
    const r = dfs(node.right);
    const cur = Math.max(l, r) + 1;
    if (cur === 2) {
      res++;
      return -1;
    }
    if (l === -1 || r === -1) return 0;
    return cur;
  }
  const v = dfs(root);
  if (v === 1) return res + 1;
  return res;
};

const t1 = a2t([0]);
const t2 = a2t([0,0,null,null,0,0,null,null,0,0]);
// log(t1, minCameraCover)
log(t2, minCameraCover)

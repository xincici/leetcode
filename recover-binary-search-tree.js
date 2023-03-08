/*
 * @Author      : linye
 * @Created At  : 2022-09-15 10:15:39
 * @Description : 99
 * https://leetcode.cn/problems/recover-binary-search-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  const map = new Map();
  const tmp = [];
  function dfs(node) {
    if (node.left) dfs(node.left);
    tmp.push(node.val);
    map.set(node.val, node);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  const arr = [];
  for (let i = 0; i < tmp.length - 1; i++) {
    if (tmp[i] > tmp[i + 1]) arr.push(i);
    if (arr.length >= 2) break;
  }
  let x, y;
  if (arr.length === 1) {
    x = tmp[arr[0]];
    y = tmp[arr[0] + 1];
  } else {
    x = tmp[arr[0]];
    y = tmp[arr[1] + 1];
  }
  let xNode = map.get(x);
  let yNode = map.get(y);
  xNode.val = y;
  yNode.val = x;
  return root;
};

const t1 = a2t([1,3,null,null,2]);
const t2 = a2t([3,1,4,null,null,2]);
log(t1, recoverTree)
log(t2, recoverTree)

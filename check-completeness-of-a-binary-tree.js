/*
 * @Author      : linye
 * @Created At  : 2022-08-04 13:52:30
 * @Description : 958
 * https://leetcode.cn/problems/check-completeness-of-a-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
  const queue = [];
  const obj = {};
  let res = true;
  function bfs(node, level) {
    if (obj[level - 1]) return res = false;
    if (node.left && node.right) {
      if (obj[level + 1]) return res = false;
      queue.push([node.left, level + 1]);
      queue.push([node.right, level + 1]);
    } else if (node.right) {
      return res = false;
    } else {
      if (node.left) {
        if (obj[level + 1]) return res = false;
        queue.push([node.left, level + 1]);
      }
      obj[level + 1] = true;
    }
    while (queue.length) {
      const item = queue.shift();
      bfs(item[0], item[1]);
    }
  }
  bfs(root, 1);
  return res;
};

const a1 = [1,2,3,5,null,7,8];
const a2 = [1,2,3,4,5,null,null,7];
const t1 = a2t(a1);
const t2 = a2t(a2);

log(t1, isCompleteTree);
log(t2, isCompleteTree);

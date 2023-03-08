/*
 * @Author      : linye
 * @Created At  : 2022-08-24 20:28:07
 * @Description : 107
 * https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [];
  function bfs(node, level) {
    if (!res[level]) res[level] = [node.val];
    else res[level].push(node.val);
    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
    while (queue.length) {
      const item = queue.shift();
      bfs(item[0], item[1]);
    }
  }
  bfs(root, 0);
  return res.reverse();
};

const tree = a2t([3,9,20,null,null,15,7]);

log(tree, levelOrderBottom);

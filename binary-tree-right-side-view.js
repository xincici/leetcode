/*
 * @Author      : linye
 * @Created At  : 2022-07-12 19:27:25
 * @Description : 199
 * https://leetcode.cn/problems/binary-tree-right-side-view/
 */

var rightSideView = function(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];
  const res = [];
  const queue = [[root, 0]];
  let idx = 0;
  function bfs(node, depth) {
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
    while (idx < queue.length) {
      const item = queue[idx];
      idx++;
      bfs(item[0], item[1]);
    }
  }
  bfs(root, 0);
  for (let i = 0; i < queue.length - 1; i++) {
    if (queue[i][1] !== queue[i + 1][1]) {
      res.push(queue[i][0].val);
    }
  }
  res.push(queue[queue.length - 1][0].val);
  return res;
};

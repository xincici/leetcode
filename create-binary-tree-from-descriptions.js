/*
 * @Author      : linye
 * @Created At  : 2022-09-26 10:27:05
 * @Description : 2196
 * https://leetcode.cn/problems/create-binary-tree-from-descriptions/
 */

require('./log');

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  const map = new Map();
  const m1 = new Map();
  let parent, child, isLeft;
  let pnode, cnode;
  for (let i = 0; i < descriptions.length; i++) {
    [parent, child, isLeft] = descriptions[i];
    if (!map.get(parent)) map.set(parent, new TreeNode(parent));
    if (!map.get(child)) map.set(child, new TreeNode(child));
    pnode = map.get(parent);
    cnode = map.get(child);
    pnode[isLeft ? 'left' : 'right'] = cnode;
    if (!m1.get(pnode)) m1.set(pnode, 1);
    m1.set(cnode, 2);
  }
  const arr = Array.from(m1.keys());
  for (let i = 0; i < arr.length; i++) {
    if (m1.get(arr[i]) === 1) return m1.get(arr[i]);
  }
};



/*
 * @Author      : linye
 * @Created At  : 2022-08-05 10:13:33
 * @Description : 623
 * https://leetcode.cn/problems/add-one-row-to-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  if (depth === 1) return { val, left: root, right: null };
  let queue = [root];
  let tmp = [];
  let curDepth = 1;
  while (true) {
    if (curDepth === depth - 1) break; 
    if (!queue.length) {
      curDepth++;
      queue = [...tmp];
      tmp = [];
      continue;
    }
    const item = queue.shift();
    if (item.left) tmp.push(item.left);
    if (item.right) tmp.push(item.right);
  }
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const { left, right } = item;
    item.left = { val, left: left || null, right: null };
    item.right = { val, right: right || null, left: null };
  }
  return root;
};

const t = a2t([1,2,3,4]);

log(t, 5, 4, addOneRow);


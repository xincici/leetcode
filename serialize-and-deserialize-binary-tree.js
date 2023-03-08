/*
 * @Author      : linye
 * @Created At  : 2022-09-21 16:41:04
 * @Description : 297
 * https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 */

require('./log');

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';
  const queue = [root];
  const res = [root.val];
  let head;
  while (queue.length) {
    head = queue.shift();
    if (head.left && head.right) {
      res.push(head.left.val);
      res.push(head.right.val);
      queue.push(head.left);
      queue.push(head.right);
    } else if (head.left) {
      res.push(head.left.val);
      res.push(null);
      queue.push(head.left);
    } else if (head.right) {
      res.push(null);
      res.push(head.right.val);
      queue.push(head.right);
    } else {
      if (queue.length) {
        res.push(null);
        res.push(null);
      }
    }
  }
  return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null;
  const arr = data.split(',').map(v => v === '' ? null : +v);
  const len = arr.length;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  const keys = ['left', 'right'];
  let i = 1, head;
  while (i < len) {
    head = queue.shift();
    keys.forEach(key => {
      if (i >= len) return;
      let val = arr[i];
      head[key] = val === null ? null : new TreeNode(val);
      if (head[key]) queue.push(head[key]);
      i++;
    });
  }
  return root;
};

const t1 = a2t([3,2,4,null,3]);
log(t1, serialize);
const s = serialize(t1);
log(s, deserialize);

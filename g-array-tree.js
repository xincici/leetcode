/*
 * @Author      : linye
 * @Created At  : 2022-09-23 19:24:45
 * @Description : array to tree and tree to array
 */

global.TreeNode = function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
};

global.a2t = function a2t(arr) {
  const len = arr.length;
  if (!len) return null;
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
}

global.t2a = function t2a(root) {
  if (!root) return [];
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
  return res;
}


/*
 * @Author      : linye
 * @Created At  : 2022-07-19 14:48:31
 * @Description : build a tree from a giving array
 */

global.TreeNode = function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
};

const a2t = global.a2t = function(arr) {
  if (!arr.length) return null;
  const res = {val: arr[0]};
  let queue = [res];
  const out = [];
  let idx = 1;
  let len = 2;
  while (idx < arr.length) {
    const tmp = arr.slice(idx, idx + len);
    while (queue.length) {
      const item = queue.shift();
      if (item === null) {
        tmp.shift();
        tmp.shift();
        continue;
      }
      let one = tmp.shift();
      if (one !== null) item.left = one === undefined ? null : { val: one };
      one = tmp.shift();
      if (one !== null) item.right = one === undefined ? null : { val: one };
      out.push(item.left || null);
      out.push(item.right || null);
    }
    idx = idx + len;
    len = len * 2;
    if (out.length) {
      queue = queue.concat(out);
      out.length = 0;
    }
  }
  return res;
};

/*
 * @Author      : linye
 * @Created At  : 2022-07-20 17:32:30
 * @Description : transform a tree to an array
 */
const t2a = global.t2a = function(tree) {
  const res = [];
  const queue = [];
  function bfs(node) {
    if (node) res.push(node.val);
    else res.push(null);
    queue.push(node ? node.left : null);
    queue.push(node ? node.right : null);
    if (queue.filter(Boolean).length === 0) {
      queue.length = 0;
      return;
    }
    while(queue.length) {
      const item = queue.shift();
      bfs(item);
    }
  }
  bfs(tree);
  return res;
};

const _t2a = global._t2a = function(tree) {
  const res = [];
  const queue = [];
  let cnt = 0;
  function bfs(node) {
    if (node) {
      res.push(node.val);
      if (node.left) {
        queue.push(node.left);
        cnt++;
      } else queue.push(null);
      if (node.right) {
        queue.push(node.right);
        cnt++;
      } else queue.push(null);
    } else {
      res.push(null);
      queue.push(null);
      queue.push(null);
    }
    while(queue.length) {
      if (cnt === 0) break;
      const item = queue.shift();
      if (item) cnt--;
      bfs(item);
    }
  }
  bfs(tree);
  return res;
};


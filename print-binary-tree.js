/*
 * @Author      : linye
 * @Created At  : 2022-08-22 10:27:54
 * @Description : 655
 * https://leetcode.cn/problems/print-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var barr = len => new Array(len).fill('');
var fn = (arr, n, total) => {
  while (n > 0) {
    arr = arr.join(',,').split(',');
    n--;
  }
  arr = barr((total - arr.length) / 2).concat(arr).concat(barr((total - arr.length) / 2));
  return arr;
};
var printTree = function(root) {
  const res = [];
  const queue = [];
  let cnt = 0;
  function bfs(node, level) {
    if (res[level] === undefined) res[level] = [];
    if (node) {
      res[level].push(node.val);
      if (node.left) {
        queue.push([node.left, level + 1]);
        cnt++;
      } else queue.push(['', level + 1]);
      if (node.right) {
        queue.push([node.right, level + 1]);
        cnt++;
      } else queue.push(['', level + 1]);
    } else {
      res[level].push('');
      queue.push(['', level + 1]);
      queue.push(['', level + 1]);
    }
    while (queue.length) {
      if (cnt === 0) break;
      const item = queue.shift();
      if (item[0]) cnt--;
      bfs(item[0], item[1]);
    }
  }
  bfs(root, 0);
  const len = res.length;
  const total = Math.pow(2, len - 1);
  res[len - 1] = res[len - 1].concat(barr(total - res[len - 1].length));
  const one = Math.pow(2, len) - 1;
  for (let i = 0; i < len; i++) {
    res[i] = fn(res[i], len - i, one);
  }
  return res;
};

const arr = [1,2,3,null,4,5,6,7,8,9];
// const arr = [1,2]
const tree = a2t(arr);
log(tree, printTree);

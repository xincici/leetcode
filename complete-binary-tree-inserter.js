/*
 * @Author      : linye
 * @Created At  : 2022-07-25 10:20:22
 * @Description : 919
 * https://leetcode.cn/problems/complete-binary-tree-inserter/
 */

require('./log');

/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
  this.root = root;
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
  const queue = [];
  let res = null;
  function bfs(node) {
    if (res) return;
    if (node.left) queue.push(node.left);
    else {
      res = node;
      node.left = { val, left: null, right: null };
    }
    if (res) return;
    if (node.right) queue.push(node.right);
    else {
      res = node;
      node.right = { val, left: null, right: null };
    }
    while (queue.length) {
      const item = queue.shift();
      bfs(item);
    }
  }
  bfs(this.root);
  return res.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.root;
};

var root = a2t([1]);
var obj = new CBTInserter(root);

console.log(obj.insert(2));
console.log(obj.get_root());
console.log(obj.insert(3));
console.log(t2a(obj.get_root()));
console.log(obj.insert(4));
console.log(t2a(obj.get_root()));
console.log(obj.insert(5));
console.log(t2a(obj.get_root()));




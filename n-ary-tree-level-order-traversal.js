/*
 * @Author      : linye
 * @Created At  : 2022-08-01 18:50:32
 * @Description : 429
 * https://leetcode.cn/problems/n-ary-tree-level-order-traversal/
 */

require('./log')

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [];
  function bfs(node, level) {
    if (!node) return;
    if (!res[level]) res[level] = [];
    res[level].push(node.val);
    if (node.children) {
      node.children.forEach(item => queue.push([item, level + 1]));
    }
    while (queue.length) {
      const item = queue.shift();
      bfs(item[0], item[1]);
    }
  }
  bfs(root, 0);
  return res;
};

const a = {
  val: 1,
  children: [{
    val: 2,
    children: [{
      val: 3
    }, {
      val: 31
    }, {
      val: 32
    }]
  }, {
    val: 21,
    children: [{
      val: 33
    }, {
      val: 34
    }, {
      val: 35
    }]
  }, {
    val: 22,
    children: [{
      val: 36
    }]
  }]
}

log(a, levelOrder);

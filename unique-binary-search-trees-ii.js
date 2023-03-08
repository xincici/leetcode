/*
 * @Author      : linye
 * @Created At  : 2022-09-15 14:24:29
 * @Description : 95
 * https://leetcode.cn/problems/unique-binary-search-trees-ii/
 */

require('./log');

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  function build(start, end) {
    const res = [];
    if (start > end) return [null];
    if (start === end) return [new TreeNode(start)];
    for (let i = start; i <= end; i++) {
      const left = build(start, i - 1);
      const right = build(i + 1, end);
      for (let l = 0; l < left.length; l++) {
        for (let r = 0; r < right.length; r++) {
          const node = new TreeNode(i);
          node.left = left[l];
          node.right = right[r];
          res.push(node);
        }
      }
    }
    return res;
  }
  return build(1, n);
};

// log(1, generateTrees)
// log(2, generateTrees)
log(4, generateTrees)

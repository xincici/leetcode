/*
 * @Author      : linye
 * @Created At  : 2022-08-17 11:38:22
 * @Description : 1302
 * https://leetcode.cn/problems/deepest-leaves-sum/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  const res = [];
  function dfs(node, level){
    res[level] = res[level] ? res[level] + node.val : node.val;
    if(node.left) dfs(node.left, level + 1);
    if(node.right) dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return res.pop();
};

var deepestLeavesSum_1 = function(root) {
  let maxLevel = 0;
  let sum = 0;
  function dfs(node, level){
    if (level > maxLevel) {
      maxLevel = level;
      sum = node.val;
    } else if (level === maxLevel) {
      sum += node.val;
    }
    if(node.left) dfs(node.left, level + 1);
    if(node.right) dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return sum;
};


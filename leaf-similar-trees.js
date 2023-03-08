/*
 * @Author      : linye
 * @Created At  : 2022-09-01 20:40:26
 * @Description : 872
 * https://leetcode.cn/problems/leaf-similar-trees/
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const res = [];
  let idx = 0;
  let ans = true;
  function dfs(node, second) {
    if (!ans) return;
    if (node.left) dfs(node.left, second);
    if (node.right) dfs(node.right, second);
    if (!node.left && !node.right) {
      if (!second) return res.push(node.val);
      if (idx >= res.length) return ans = false;
      if (res[idx++] !== node.val) return ans = false;
    }
  }
  dfs(root1);
  dfs(root2, true);
  return ans && (idx === res.length);
};

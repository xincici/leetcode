/*
 * @Author      : linye
 * @Created At  : 2022-09-16 11:57:59
 * @Description : 617
 * https://leetcode.cn/problems/merge-two-binary-trees/
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees_1 = function(root1, root2) {
  if (!root1 || !root2) return root1 || root2;
  const map = new Map();
  function dfs(node, path, init) {
    if (init) map.set(path, node);
    else {
      if (map.get(path)) {
        node.val += map.get(path).val;
      }
    }
    if (init && node.left) dfs(node.left, `${path}.left`, init);
    if (!init) {
      if (!node.left) node.left = map.get(`${path}.left`) || null;
      else dfs(node.left, `${path}.left`);
    }
    if (init && node.right) dfs(node.right, `${path}.right`, init);
    if (!init) {
      if (!node.right) node.right = map.get(`${path}.right`) || null;
      else dfs(node.right, `${path}.right`);
    } 
  }
  dfs(root1, 'root', true);
  dfs(root2, 'root');
  return root2;
};

var mergeTrees = function(root1, root2) {
  if (!root1 || !root2) return root1 || root2;
  const node = new TreeNode(root1.val + root2.val);
  node.left = mergeTrees(root1.left, root2.left);
  node.right = mergeTrees(root1.right, root2.right);
  return node;
}

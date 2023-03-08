/*
 * @Author      : linye
 * @Created At  : 2022-09-01 19:01:44
 * @Description : 1382
 * https://leetcode.cn/problems/balance-a-binary-search-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  const tmp = [];
  function dfs(node) {
    if (node.left) dfs(node.left);
    tmp.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  function build(start, end) {
    if (start > end) return null;
    if (start === end) return new TreeNode(tmp[start]);
    const mid = (start + end) >> 1;
    const node = new TreeNode(tmp[mid]);
    node.left = build(start, mid - 1);
    node.right = build(mid + 1, end);
    return node;
  }
  return build(0, tmp.length - 1);
};

const tree = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
      right: {
        val: 4,
        right: {
          val: 5,
        }
      }
    }
  }
}
log(tree, balanceBST)

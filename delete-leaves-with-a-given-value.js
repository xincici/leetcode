/*
 * @Author      : linye
 * @Created At  : 2022-07-18 19:30:50
 * @Description : 1325
 * https://leetcode.cn/problems/delete-leaves-with-a-given-value/
 */

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */

require('./log');

var removeLeafNodes = function(root, target) {
  function dfs(node) {
    if (!node) return null;
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    if (!node.left && !node.right) {
      if (node.val === target) return null;
      return node;
    }
    return node;
  }
  return dfs(root);
};

const tree = {
  val: 2,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 2
      }
    },
    right: {
      val: 2,
      right: {
        val: 2
      }
    }
  },
  right: {
    val: 2
  }
};

log(tree, 2, removeLeafNodes);

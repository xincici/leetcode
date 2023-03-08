/*
 * @Author      : linye
 * @Created At  : 2022-08-22 15:33:02
 * @Description : 1261
 * https://leetcode.cn/problems/find-elements-in-a-contaminated-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  function dfs(node, value) {
    node.val = value;
    if (node.left) {
      dfs(node.left, 2 * value + 1);
    }
    if (node.right) {
      dfs(node.right, 2 * value + 2);
    }
  }
  dfs(root, 0);
  this.root = root;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  let res = false;
  function dfs(node) {
    if (res) return;
    if (node.val === target) return res = true;
    if (node.val > target) return;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(this.root);
  return res;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

const tree = {
  val: -1,
  left: {
    val: -1,
    right: {
      val: -1
    }
  },
  right: {
    val: -1,
    left: {
      val: -1
    },
    right: {
      val: -1
    }
  }
}

const obj = new FindElements(tree);
console.log(obj.find(8));


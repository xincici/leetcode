/*
 * @Author      : linye
 * @Created At  : 2022-08-16 14:36:42
 * @Description : offer-26
 * https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/
 */

require('./log');

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!A || !B) return false;
  let flag = false;
  function dfs(node) {
    if (flag) return;
    flag = compare(node, B);
    if (flag) return;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  function compare(node, one) {
    if (!one) return true;
    if (!node) return false;
    if (node.val !== one.val) return false;
    if (one.left && !node.left || one.right && !node.right) return false;
    return compare(node.left, one.left) && compare(node.right, one.right);
  }
  dfs(A);
  return flag;
};

const t1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    }
  },
  right: {
    val: 3,
    left: {
      val: 4,
    }
  }
}
const t2 = {
  val: 2,
  left: {
    val: 4,
    right: {
      val: 5
    }
  }
}

log(t1, t2, isSubStructure);

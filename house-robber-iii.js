/*
 * @Author      : linye
 * @Created At  : 2022-09-15 16:02:04
 * @Description : 337
 * https://leetcode.cn/problems/house-robber-iii/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  function dfs(node) {
    if (!node) return [0, 0];
    if (!node.left && !node.right) return [node.val, 0];
    let [l1, l2] = dfs(node.left);
    let [r1, r2] = dfs(node.right);
    const m1 = node.val + l2 + r2;
    const m2 = Math.max(l1, l2) + Math.max(r1, r2);
    return [m1, m2];
  }
  const res = dfs(root);
  return Math.max(...res);
};

const t1 = a2t([3,2,3,null,3,null,1]);
const t2 = a2t([3,4,5,1,3,null,1]);
const t3 = {
  val: 4,
  left: {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3
      }
    }
  }
}

log(t1, rob);
log(t2, rob);
log(t3, rob);

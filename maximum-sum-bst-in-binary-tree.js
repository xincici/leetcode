/*
 * @Author      : linye
 * @Created At  : 2022-09-23 14:14:00
 * @Description : 1373
 * https://leetcode.cn/problems/maximum-sum-bst-in-binary-tree/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
  let res = 0;
  function dfs(node) {
    if (!node) return [true, null, null, 0];
    const val = node.val;
    if (!node.left && !node.right) {
      res = Math.max(val, res);
      return [true, val, val, val];
    }
    let [l1, l2, l3, l4] = dfs(node.left);
    let [r1, r2, r3, r4] = dfs(node.right);
    if (!l1 || !r1) return [false, 0, 0, 0];
    if (node.left && val <= l3) return [false, 0, 0, 0];
    if (node.right && val >= r2) return [false, 0, 0, 0];
    const sum = l4 + r4 + val;
    res = Math.max(res, sum);
    const min = Math.min(l2 === null ? Infinity : l2, r2 === null ? Infinity : r2, val);
    const max = Math.max(l3 === null ? -Infinity : l3, r3 === null ? -Infinity : r3, val);
    return [true, min, max, sum];
  }
  dfs(root);
  return res;
};

const t1 = a2t([5,4,8,3,null,6,3]);
const t2 = {
  "val": 4,
  "left": {
    "val": 8,
    "left": {
      "val": 6,
      "left": {
        "val": 9,
      },
    },
    "right": {
      "val": 1,
      "left": {
        "val": -5,
        "right": {
          "val": -3,
        }
      },
      "right": {
        "val": 4,
        "right": {
          "val": 10,
        }
      }
    }
  },
};
log(t2, maxSumBST)


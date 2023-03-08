/*
 * @Author      : linye
 * @Created At  : 2022-09-22 17:22:35
 * @Description : 1145
 * https://leetcode.cn/problems/binary-tree-coloring-game/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
  let cnt1 = cnt2 = 0;
  function dfs(node, isLeft, isRight) {
    if (!node) return;
    if (isLeft) cnt1++;
    if (isRight) cnt2++;
    dfs(node.left, isLeft || node.val === x, isRight);
    dfs(node.right, isLeft, isRight || node.val === x);
  }
  dfs(root, false, false);
  const diff = n - cnt1 - cnt2 - 1;
  const half = (n + 1) >> 1;
  return Math.max(cnt1, cnt2, diff) >= half;
};

const t = a2t([1,2,3,4,5]);
log(t, 5, 1, btreeGameWinningMove)

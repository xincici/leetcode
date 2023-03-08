/*
 * @Author      : linye
 * @Created At  : 2022-09-15 17:20:56
 * @Description : 508
 * https://leetcode.cn/problems/most-frequent-subtree-sum/
 */

require('./log');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const map = new Map();
  const res = [];
  let max = 0;
  function dfs(node) {
    if (!node) return 0;
    const tmp = dfs(node.left) + dfs(node.right) + node.val;
    map.set(tmp, (map.get(tmp) || 0) + 1);
    const num = map.get(tmp);
    if (num > max) {
      max = num;
      res.length = 0;
      res.push(tmp);
    } else if (num === max) {
      res.push(tmp);
    }
    return tmp;
  }
  dfs(root);
  return res;
};

const t1 = a2t([5,2,-3]);
const t2 = a2t([5,2,-5]);
log(t1, findFrequentTreeSum)
log(t2, findFrequentTreeSum)

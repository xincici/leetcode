/*
 * @Author      : linye
 * @Created At  : 2022-09-19 10:26:54
 * @Description : 894
 * https://leetcode.cn/problems/all-possible-full-binary-trees/
 */

require('./log');

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
  if (n % 2 === 0) return [];
  if (n === 1) return [new TreeNode(0)];
  const list = []; 
  for (let i = 3; i <= n; i += 2) {
    const tmp = allPossibleFBT(i - 2);
    for (let i = 0; i < tmp.length; i++) {
      if (i === 0) list.length = 0;
      const item = tmp[i];
      function dfs(node, path) {
        if (!node.left && !node.right) {
          list.push([item, path]);
        }
        if (node.left) {
          dfs(node.left, path + '.left');
          dfs(node.right, path + '.right');
        }
      }
      dfs(item, 'root');
    }
  }
  const res = new Set([]);
  list.forEach(one => {
    let cur = tree = _.cloneDeep(one[0]);
    const path = one[1].split('.').filter(Boolean);
    let idx = 1;
    while (true) {
      if (idx === path.length) {
        tree.left = new TreeNode(0);
        tree.right = new TreeNode(0);
        break;
      }
      tree = tree[path[idx]];
      idx++;
    }
    res.add(JSON.stringify(cur));
  });
  return Array.from(res).map(v => JSON.parse(v));
};

log(7, allPossibleFBT);

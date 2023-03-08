/*
 * @Author      : linye
 * @Created At  : 2022-09-07 15:53:23
 * @Description : 1367
 * https://leetcode.cn/problems/linked-list-in-binary-tree/
 */

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  let res = false;
  function dfs(item, node) {
    if (res) return;
    if (!item) return res = true;
    if (item.val === node.val) {
      if (!item.next) return res = true;
      if (node.left) dfs(item.next, node.left);
      if (node.right) dfs(item.next, node.right);
    } else {
      if (node.left) dfs(head, node.left);
      if (node.right) dfs(head, node.right);
    }
    if (node !== root && head.val === node.val) {
      if (node.left) dfs(head.next, node.left);
      if (node.right) dfs(head.next, node.right);
    }
  }
  dfs(head, root);
  return res;
};

var isSubPath_1 = function(head, root) {
  let res = false;
  let str = head.val;
  while (head.next) {
    head = head.next;
    str += `,${head.val}`;
  }
  function dfs(node, path) {
    if (res) return;
    path = `${path},${node.val}`;
    if (path.includes(str)) return res = true;
    if (node.left) dfs(node.left, path);
    if (node.right) dfs(node.right, path);
  }
  dfs(root, '');
  return res;
};

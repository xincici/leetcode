/*
 * @Author      : linye
 * @Created At  : 2022-07-29 18:39:07
 * @Description : 143
 * https://leetcode.cn/problems/reorder-list/
 */

require('./log');

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head.next) return;
  const tmp = [];
  let idx = 0, node = head;
  while (node) {
    tmp[idx++] = node;
    node = node.next;
  }
  let start = 0, end = tmp.length - 1, flag = true;
  while (true) {
    if (flag) {
      tmp[start].next = tmp[end];
      start++;
      flag = false
    } else {
      tmp[end].next = tmp[start];
      end--;
      flag = true;
    }
    if (start === end) {
      if (flag) tmp[start].next = null;
      else tmp[end].next = null;
      break;
    }
  }
};


/*
 * @Author      : linye
 * @Created At  : 2022-09-26 15:56:53
 * @Description : 83
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 */

require('./log');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null;
  let pre = head;
  let cur = head.next
  while (cur) {
    if (pre.val === cur.val) {
      cur = cur.next;
      continue;
    }
    pre.next = cur;
    pre = cur;
    cur = cur.next;
  }
  pre.next = null;
  return head;
};

const head = a2l([1,1,2,2,3,4,5])
log(head, deleteDuplicates)

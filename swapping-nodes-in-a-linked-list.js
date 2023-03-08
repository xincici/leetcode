/*
 * @Author      : linye
 * @Created At  : 2022-09-21 10:58:29
 * @Description : 1721
 * https://leetcode.cn/problems/swapping-nodes-in-a-linked-list/
 */

require('./log');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let one, two;
  let cur = head;
  let idx = 0;
  while (cur) {
    idx++;
    if (idx === k) {
      one = cur;
      two = head;
    }
    cur = cur.next;
    if (idx > k) two = two.next;
  }
  let tmp = one.val;
  one.val = two.val;
  two.val = tmp;
  return head;
};

const l1 = a2l([1,2,3,4,5]);

log(l1, 2, swapNodes);

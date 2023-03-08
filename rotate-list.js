/*
 * @Author      : linye
 * @Created At  : 2022-09-26 14:06:27
 * @Description : 61
 * https://leetcode.cn/problems/rotate-list/
 */

require('./log');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null;
  let cur = head.next;
  const tmp = [head];
  while (cur) {
    tmp.push(cur);
    cur = cur.next;
  }
  const len = tmp.length;
  if (k % len === 0) return head;
  k = k % len;
  let res = tmp[len - k];
  tmp[len - 1].next = tmp[0];
  tmp[len - k - 1].next = null;
  return res;
};

const head = a2l([1,2,3,4,5]);
log(head, 2, rotateRight)

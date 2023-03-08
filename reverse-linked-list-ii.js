/*
 * @Author      : linye
 * @Created At  : 2022-09-26 18:35:52
 * @Description : 92
 * https://leetcode.cn/problems/reverse-linked-list-ii/
 */

require('./log');

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const tmp = [];
  while (head) {
    tmp.push(head.val);
    head = head.next;
  }
  let i = left - 1, j = right - 1, val;
  while (i < j) {
    val = tmp[i];
    tmp[i] = tmp[j];
    tmp[j] = val;
    i++;
    j--;
  }
  let cur = new ListNode(tmp[0]), idx = 1;
  head = cur;
  while (idx < tmp.length) {
    cur.next = new ListNode(tmp[idx]);
    cur = cur.next;
    idx++;
  }
  cur.next = null;
  return head;
};

const head = a2l([1,2,3,4,5]);
log(head, 2, 4, reverseBetween)

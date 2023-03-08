/*
 * @Author      : linye
 * @Created At  : 2022-08-15 13:41:18
 * @Description : 328
 * https://leetcode.cn/problems/odd-even-linked-list/
 */

require('./log');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head || !head.next) return head;
  let flag = true;
  let even = head;
  let tmp = odd = head.next;
  let cur = odd.next;
  while (cur) {
    if (flag) {
      even.next = cur;
      even = cur;
    } else {
      odd.next = cur;
      odd = cur;
    }
    flag = !flag;
    cur = cur.next;
  }
  odd.next = null;
  even.next = tmp;
  return head;
};

const head = a2l([1,2]);

console.log(l2a(oddEvenList(head)));

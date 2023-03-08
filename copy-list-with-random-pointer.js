/*
 * @Author      : linye
 * @Created At  : 2022-09-27 11:08:55
 * @Description : 138
 * https://leetcode.cn/problems/copy-list-with-random-pointer/
 */

require('./log');

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  const rawHead = head;
  const map = new Map();
  let res, cur;
  while (head) {
    if (!res) {
      res = cur = new ListNode(head.val);
      map.set(head, cur);
      head = head.next;
      continue;
    }
    cur.next = new ListNode(head.val);
    cur = cur.next;
    map.set(head, cur);
    head = head.next;
  }
  cur = res;
  head = rawHead;
  while (head) {
    const rnode = head.random;
    if (!rnode) {
      cur.random = null;
    } else {
      cur.random = map.get(rnode);
    }
    head = head.next;
    cur = cur.next;
  }
  return res;
};

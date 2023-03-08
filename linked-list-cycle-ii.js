/*
 * @Author      : linye
 * @Created At  : 2022-09-02 19:35:26
 * @Description : 142
 * https://leetcode.cn/problems/linked-list-cycle-ii/
 */

require('./log');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head) return null;
  const map = new Map();
  while (true) {
    if (!head) return null;
    if (map.has(head)) return head;
    map.set(head, 1);
    head = head.next;
  }
};

var s1 = function(head) {
  if (!head) return null;
  let t1 = t2 = t3 = head;
  while (true) {
    if (!t1 || !t2) return null;
    t1 = t1.next;
    t2 = t2.next?.next;
    if (t1 === t2) {
      while (t1 !== t3) {
        t1 = t1.next;
        t3 = t3.next;
      }
      return t1;
    }
  }
};

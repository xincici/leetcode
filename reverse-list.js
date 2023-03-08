/*
 * @Author      : linye
 * @Created At  : 2022-09-26 20:03:51
 * @Description : 
 */

require('./log');

var reserve = function(head) {
  if (!head) return null;
  if (!head.next) return head;
  const last = reserve(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

var re = function(head) {
  if (!head) return null;
  let cur = head, pre = nxt = null;
  while (cur.next) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  cur.next = pre;
  return cur;
}

const head = a2l([1,2,3,4,5])
log(head, re)

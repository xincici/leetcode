/*
 * @Author      : linye
 * @Created At  : 2022-07-29 18:55:55
 * @Description : list to array and array to list
 */

global.ListNode = function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
};

const a2l = global.a2l = arr => {
  if (!arr.length) return null;
  const res = new ListNode(arr[0]);
  let cur = res;
  let idx = 0;
  while (idx < arr.length - 1) {
    cur.next = new ListNode(arr[idx + 1]);
    cur = cur.next;
    idx++;
  }
  return res;
};

const l2a = global.l2a = head => {
  if (!head) return [];
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
};


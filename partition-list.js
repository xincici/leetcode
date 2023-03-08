/*
 * @Author      : linye
 * @Created At  : 2022-09-26 16:42:34
 * @Description : 86
 * https://leetcode.cn/problems/partition-list/
 */

require('./log');

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) return null;
  let cur = head;
  let res, res1;
  let small, big;
  while (cur) {
    if (cur.val < x) {
      if (!res) res = small = cur;
      else {
        small.next = cur;
        small = cur;
      }
    } else {
      if (!res1) res1 = big = cur;
      else {
        big.next = cur;
        big = cur;
      }
    }
    cur = cur.next;
  }
  if (!res || !res1) return res || res1;
  small.next = res1;
  big.next = null;
  return res;
};

const head = a2l([1,4,3,2,5,2]);
log(head, 4, partition)

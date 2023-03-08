/*
 * @Author      : linye
 * @Created At  : 2022-08-04 18:50:10
 * @Description : 160
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  const tmp = [];
  let cur = headA;
  while (cur) {
    tmp.push(cur);
    cur = cur.next;
  }
  cur = headB;
  while (cur) {
    if (tmp.includes(cur)) return cur;
    cur = cur.next;
  }
  return null;
};

// another solution
var solution2 = function(headA, headB) {
  if (!headA || !headB) return null;
  let pa = headA, pb = headB;
  while (pa !== pb) {
    pa = pa ? pa.next : headB;
    pb = pb ? pb.next : headA;
  }
  return pa;
};

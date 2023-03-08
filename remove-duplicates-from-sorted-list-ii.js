/*
 * @Author      : linye
 * @Created At  : 2022-09-26 15:31:02
 * @Description : 82
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/
 */

require('./log');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null;
  if (!head.next) return head;
  const val = head.val;
  let res = head.next;
  while (res && res.val === val) {
    res = res.next;
  }
  if (res === head.next) {
    head.next = deleteDuplicates(res);
    return head;
  }
  return deleteDuplicates(res);
};

const head = a2l([1,1,2,2,3,3,4,4,4,5,5]);
log(head, deleteDuplicates)

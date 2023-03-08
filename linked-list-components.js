/*
 * @Author      : linye
 * @Created At  : 2022-08-26 19:20:05
 * @Description : 817
 * https://leetcode.cn/problems/linked-list-components/
 */

require('./log');

/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
  let len = nums.length;
  let res = 0;
  let flag = 0;
  const nmap = nums.reduce((sum, cur) => {
    sum[cur] = true;
    return sum;
  }, {});
  while (head) {
    if (nmap[head.val]) {
      len--;
      if (!flag) flag = 1;
    } else {
      if (flag) {
        flag = 0;
        res++;
      }
    }
    head = head.next;
    if (len === 0) break;
  }
  return res + flag;
};

const link = a2l([0,1,2,3,4,5,6,7]);
log(link, [0, 1, 3], numComponents)
const head = a2l([0,1,2,3,4,5]), nums = [0,3,1,4]
log(head, nums, numComponents)

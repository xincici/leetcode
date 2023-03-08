/*
 * @Author      : linye
 * @Created At  : 2022-08-19 12:16:40
 * @Description : 946
 * https://leetcode.cn/problems/validate-stack-sequences/
 */

require('./log');

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const len = pushed.length;
  let idx1 = idx2 = 0;
  const stack = [];
  while (true) {
    if (idx2 === len) return true;
    if (stack[stack.length - 1] === popped[idx2]) {
      stack.pop();
      idx2++;
      continue;
    }
    if (stack.includes(popped[idx2])) return false;
    stack.push(pushed[idx1]);
    idx1++;
  }
};

log([1,2,3,4,5], [4,5,3,2,1], validateStackSequences);
log([1,2,3,4,5], [4,3,5,1,2], validateStackSequences);

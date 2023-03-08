/*
 * @Author      : linye
 * @Created At  : 2022-09-14 14:48:23
 * @Description : 331
 * https://leetcode.cn/problems/verify-preorder-serialization-of-a-binary-tree/
 */

require('./log');

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  if (preorder === '#') return true;
  const arr = preorder.split(',');
  const stack = [];
  let i = 0;
  for (; i < arr.length; i++) {
    console.log({stack})
    if (arr[i] !== '#') {
      stack.push(arr[i]);
      continue;
    }
    if (stack[stack.length - 1] !== '#') {
      stack.push('#');
      continue;
    }
    stack.push('#');
    let len = stack.length;
    while (stack[len - 1] === '#' && stack[len - 2] === '#') {
      len = len - 2;
      if (len <= 0) return false;
      stack.length = len;
      stack[len - 1] = '#';
    }
  }
  return stack.length === 1 && stack[0] === '#';
};

const p1 = "9,3,4,#,#,1,#,#,2,#,6,#,#";
const p2 = "9,#";
const p3 = "1,#,#,#,#";
const p4 = "9,#,93,#,9,9,#,#,#"
log(p1, isValidSerialization)
log(p2, isValidSerialization)
log(p3, isValidSerialization)
log(p4, isValidSerialization)

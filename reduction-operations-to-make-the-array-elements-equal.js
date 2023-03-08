/*
 * @Author      : linye
 * @Created At  : 2022-07-13 15:01:32
 * @Description : 1887
 * https://leetcode.cn/problems/reduction-operations-to-make-the-array-elements-equal/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

require('./log');

var reductionOperations = function(nums) {
  if (nums.length <= 1) return 0;
  nums.sort((a, b) => a - b);
  const obj = {
    '0': 0
  };
  let key = 0, lastNum = nums[0];
  nums.forEach(num => {
    if (num === lastNum) {
      obj[key]++;
    } else {
      key++;
      lastNum = num;
      obj[key] = 1;
    }
  });
  const len = Object.keys(obj).length;
  if (len === 1) return 0;
  let sum = 0;
  for (let idx = 1; idx < len; idx++) {
    sum += idx * obj[idx];
  }
  return sum;
};

log([1,1,1,1], reductionOperations);


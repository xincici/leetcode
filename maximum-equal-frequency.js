/*
 * @Author      : linye
 * @Created At  : 2022-08-19 12:48:47
 * @Description : 1224
 * https://leetcode.cn/problems/maximum-equal-frequency/
 */

require('./log');

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxEqualFreq = function(nums) {
  if (nums.length <= 3) return nums.length;
  let max = 3;
  let mtime = 1; // 记录出现次数最多的数字出现了几次
  const m1 = {}; // 记录一个数字出现的次数
  const m2 = {}; // 记录出现 x 次的数字有几个
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!m1[num]) {
      m1[num] = 1;
      m2[1] = (m2[1] || 0) + 1;
    } else {
      m2[m1[num]]--;
      m1[num] = m1[num] + 1;
      m2[m1[num]] = (m2[m1[num]] || 0) + 1;
      mtime = Math.max(mtime, m1[num]);
    }
    if (
      mtime === 1 ||
      (m2[mtime] === 1 && (m2[mtime - 1] * (mtime - 1) + mtime === i + 1)) ||
      (m2[mtime] * mtime + 1 === i + 1)
    ) {
      max = i + 1;
    }
  }
  return max;
};

log([2,2,1,2], maxEqualFreq);
log([2,2,1,1,5,3,3,5], maxEqualFreq);
log([1,2,3,4,5,6,7,8,9], maxEqualFreq);
log([1,1,1,1,1,1,1], maxEqualFreq);
log([1,1,1,2,2,2,3,3,3], maxEqualFreq);
log([1,1,1,2,2,2,3,3,3,4,4,4,5], maxEqualFreq);

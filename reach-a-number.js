/*
 * @Author      : linye
 * @Created At  : 2022-09-06 11:06:01
 * @Description : 754
 * https://leetcode.cn/problems/reach-a-number/
 */

require('./log');

/**
 * @param {number} target
 * @return {number}
 */

var add = function(sum) {
  let i = 1;
  while (sum >= i) {
    sum -= i;
    i++;
  }
  return [i, sum];
};

var reachNumber = function(target) {
  target = Math.abs(target);
  const [last, diff] = add(target);
  if (diff === 0) return last - 1;
  const more = last - diff;
  if (more % 2 === 0) return last;
  if ((more + last) % 2 !== 0) return last + 1;
  return last + 2;
};

log(2, reachNumber);
log(100, reachNumber);
log(99, reachNumber);
log(101, reachNumber);
log(12, reachNumber);

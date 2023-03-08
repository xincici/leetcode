/*
 * @Author      : linye
 * @Created At  : 2022-08-19 12:02:54
 * @Description : 1450
 * https://leetcode.cn/problems/number-of-students-doing-homework-at-a-given-time/
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  return startTime.reduce((sum, cur, idx) => {
    if (cur <= queryTime && endTime[idx] >= queryTime) return sum + 1;
    return sum;
  }, 0);
};

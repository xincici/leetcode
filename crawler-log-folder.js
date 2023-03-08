/*
 * @Author      : linye
 * @Created At  : 2022-09-09 10:05:33
 * @Description : 1598
 * https://leetcode.cn/problems/crawler-log-folder/
 */

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let len = 0;
  let log;
  for (let i = 0; i < logs.length; i++) {
    log = logs[i];
    if (log.startsWith('./')) continue;
    if (log.startsWith('../')) {
      if (len !== 0) len--;
    } else len++;
  }
  return len;
};

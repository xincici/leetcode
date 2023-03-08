/*
 * @Author      : linye
 * @Created At  : 2022-10-14 19:32:55
 * @Description : 2284
 * https://leetcode.cn/problems/sender-with-largest-word-count/
 */

require('./log');

/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
  let max = 0;
  const usr = [];
  const map = new Map();
  let msg, sed, cnt;
  for (let i = 0; i < messages.length; i++) {
    msg = messages[i];
    sed = senders[i];
    map.set(sed, (map.get(sed) || 0) + msg.split(' ').length);
    cnt = map.get(sed);
    if (cnt > max) {
      max = cnt;
      usr.length = 0;
      usr.push(sed);
    } else if (cnt === max) {
      usr.push(sed);
    }
  }
  if (usr.length === 1) return usr[0];
  return usr.sort((a, b) => {
    let idx = 0;
    while (idx < a.length && idx < b.length) {
      if (a[idx] !== b[idx]) return b.charCodeAt(idx) - a.charCodeAt(idx);
      idx++;
    }
    return b.length - a.length;
  })[0];
};

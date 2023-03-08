/*
 * @Author      : linye
 * @Created At  : 2022-11-07 10:35:11
 * @Description : 816
 * https://leetcode.cn/problems/ambiguous-coordinates/
 */

require('./log');

/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
  s = s.substring(1, s.length - 1);
  const arr = [];
  for (let i = 1; i < s.length; i++) {
    const pre = s.substring(0, i);
    const suf = s.substring(i);
    if (pre.length > 1 && +pre === 0 || suf.length > 1 && +suf === 0) continue;
    arr.push([pre, suf]);
  }
  const ok = str => str.length === String(+str).length;
  function inner(str, list) {
    if (ok(str)) list.push(str);
    for (let i = 1; i < str.length; i++) {
      let tmp = str.substring(0, i) + '.' + str.substring(i);
      if (ok(tmp)) list.push(tmp);
    }
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const [pre, suf] = arr[i];
    const parr = [], sarr = [];
    inner(pre, parr);
    inner(suf, sarr);
    if (!parr.length || !sarr.length) continue;
    for (let p = 0; p < parr.length; p++) {
      for (let s = 0; s < sarr.length; s++) {
        res.push('(' + parr[p] + ', ' + sarr[s] + ')');
      }
    }
  }
  return res;
};

log("(123)", ambiguousCoordinates);
log("(0123)", ambiguousCoordinates);
log("(100)", ambiguousCoordinates);

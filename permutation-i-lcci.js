/*
 * @Author      : linye
 * @Created At  : 2022-09-08 11:50:58
 * @Description : 08.07
 */

require('./log');

/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  const len = S.length;
  const res = [];
  const tmp = [];
  function backtrack() {
    if (tmp.length === len) res.push(tmp.join(''));
    for (let i = 0; i < len; i++) {
      if (tmp.includes(S[i])) continue;
      tmp.push(S[i]);
      backtrack();
      tmp.pop();
    }
  }
  backtrack();
  return res;
};

const s = 'asdfg';

log(s, permutation)

/*
 * @Author      : linye
 * @Created At  : 2022-09-02 18:10:15
 * @Description : 1306
 * https://leetcode.cn/problems/jump-game-iii/
 */

require('./log');

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const len = arr.length;
  const set = new Set();
  let res = false;
  const queue = [];
  function bfs(idx) {
    if (res) return;
    const val = arr[idx];
    if (val === 0) return res = true;
    let [small, big] = [idx - val, idx + val];
    if (small >= 0 && !set.has(small)) {
      set.add(small);
      queue.push(small);
    }
    if (big < len && !set.has(big)) {
      set.add(big);
      queue.push(big);
    }
    while (queue.length) {
      const item = queue.shift();
      bfs(item);
    }
  }
  bfs(start);
  return res;
};

log([4,2,3,0,3,1,2], 5, canReach)
log([4,2,3,0,3,1,2], 0, canReach)
log([3,0,2,1,2], 2, canReach)

/*
 * @Author      : linye
 * @Created At  : 2022-08-11 13:50:17
 * @Description : 2332
 * https://leetcode.cn/problems/the-latest-time-to-catch-a-bus/
 */

require('./log');

/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function(buses, passengers, capacity) {
  const bl = buses.length;
  const pl = passengers.length;
  buses.sort((a, b) => a - b);
  passengers.sort((a, b) => a - b);
  let b = p = total = 0
  while (b < bl) {
    const start = buses[b];
    total = 0;
    while (p < pl) {
      if (total >= capacity) break;
      if (passengers[p] > start) break;
      p++;
      total++;
    }
    b++;
    if (p === pl) break;
  }
  if (b < bl) return buses[bl - 1];
  let tmp = passengers[--p];
  if (total < capacity) {
    let tmp1 = buses[bl - 1];
    if (!passengers.includes(tmp1)) return tmp1;
    tmp = tmp1;
  }
  while (p >= 0) {
    tmp--;
    p--;
    if (tmp !== passengers[p]) return tmp;
  }
};

log([10,20], [2,17,18,19], 2, latestTimeCatchTheBus);
log([2], [2], 2, latestTimeCatchTheBus);
log([3], [2, 4], 2, latestTimeCatchTheBus);


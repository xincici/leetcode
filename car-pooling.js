/*
 * @Author      : linye
 * @Created At  : 2022-10-12 14:08:10
 * @Description : 1094
 * https://leetcode.cn/problems/car-pooling/
 */

require('./log');

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  let num = 0;
  let map = new Map();
  let pass, from, to;
  trips.sort((a, b) => {
    if (a[1] === b[1]) return a[2] - b[2];
    return a[1] - b[1];
  });
  let last = trips[0][1];
  for (let i = 0; i < trips.length; i++) {
    [pass, from, to] = trips[i];
    while (last <= from) {
      num -= (map.get(last) || 0);
      last++;
    }
    num += pass;
    if (num > capacity) return false;
    map.set(to, (map.get(to) || 0) + pass);
  }
  return true;
};

const trips = [[3,2,8],[4,4,6],[10,8,9]];
log(trips, 11, carPooling)

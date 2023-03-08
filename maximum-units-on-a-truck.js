/*
 * @Author      : linye
 * @Created At  : 2022-11-15 09:58:41
 * @Description : 1710
 * https://leetcode.cn/problems/maximum-units-on-a-truck/
 */

require('./log');

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => a[1] !== b[1] ? b[1] - a[1] : b[0] - a[0]);
  let res = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize > boxTypes[i][0]) {
      res += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else {
      res += truckSize * boxTypes[i][1];
      return res;
    }
  }
  return res;
};

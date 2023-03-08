/*
 * @Author      : linye
 * @Created At  : 2022-12-29 10:09:03
 * @Description : 
 */

require('./log');

var twoOutOfThree = function(nums1, nums2, nums3) {
  const map = new Map();
  const res = [];
  nums1.forEach(v => map.set(v, 1));
  nums2.forEach(v => {
    if (!map.has(v)) map.set(v, 10);
    else if (map.get(v) === 1) {
      res.push(v);
      map.set(v, 11);
    }
  });
  nums3.forEach(v => {
    if (map.get(v) === 1 || map.get(v) === 10) res.push(v);
    map.set(v, 100);
  });
  return res;
};

const n1 = [7,2,3,8,7,14,11,7,6]
const n2 = [3,8,14,14,4]
const n3 = [14,7,11,8]

log(n1, n2, n3, twoOutOfThree);

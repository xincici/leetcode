/*
 * @Author      : linye
 * @Created At  : 2022-08-25 10:00:38
 * @Description : 658
 * https://leetcode.cn/problems/find-k-closest-elements/
 */

require('./log');

var findClosestElements = function(arr, k, x) {
  if (x <= arr[0]) return arr.slice(0, k);
  if (x >= arr[arr.length - 1]) return arr.slice(-k);
  let i = 0, j = arr.length - 1, mid, idx;
  while (i + 1 < j) {
    mid = i + ((j - i) >> 1);
    if (arr[mid] === x) {
      idx = mid;
      break;
    }
    if (arr[mid] > x) j = mid;
    else i = mid;
  }
  if (!idx) idx = (x - arr[i] <= arr[j] - x) ? i : j;
  const res = [arr[idx]];
  let m = idx - 1, n = idx + 1;
  while (res.length < k) {
    if (m < 0) return arr.slice(0, k);
    if (n >= arr.length) return arr.slice(-k);
    if (x - arr[m] > arr[n] - x) {
      res.push(arr[n]);
      n++;
    } else {
      res.unshift(arr[m]);
      m--; 
    }
  }
  return res;
};

log([1,3], 1, 2, findClosestElements);
log([1,2,3,4,5], 4, 3, findClosestElements);
log([1,2,3,4,5], 4, -1, findClosestElements);
log([-2,0,1,2,3,6,7,8,9,10], 8, 4, findClosestElements);
log([1,1,1,10,10,10], 1, 9, findClosestElements);

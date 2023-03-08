/*
 * @Author      : linye
 * @Created At  : 2022-07-08 15:26:35
 * @Description : 1217
 */

require('./log');

const solve = function(position) {
  let odd = 0, even = 0;
  position.forEach(v => {
    if (v % 2 !== 0) odd++;
    else even++;
  });
  return Math.min(odd, even);
}

const arr = [1,2,3,2];

log(arr, solve);

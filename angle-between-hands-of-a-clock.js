/*
 * @Author      : linye
 * @Created At  : 2022-08-02 14:14:31
 * @Description : 1344
 * https://leetcode.cn/problems/angle-between-hands-of-a-clock/
 */

require('./log');

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  const mAngle = 6 * minutes;
  hour = hour % 12;
  const hAngle = 30 * hour + 30 * (minutes / 60);
  const diff = Math.abs(mAngle - hAngle);
  return diff > 180 ? 360 - diff : diff;
};

log(6, 0, angleClock);
log(12, 30, angleClock);
log(3, 30, angleClock);
log(3, 15, angleClock);
log(4, 50, angleClock);
log(12, 0, angleClock);

/*
 * @Author      : linye
 * @Created At  : 2022-07-13 11:16:31
 * @Description : 735
 * https://leetcode.cn/problems/asteroid-collision/
 */

/*
给定一个整数数组 asteroids，表示在同一行的行星。
对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。
找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。
 */

require('./log');

var asteroidCollision = function(asteroids) {
  if (asteroids.length === 1) return asteroids;
  const stack = [];
  asteroids.forEach(item => {
    if (stack.length === 0 || item > 0) {
      stack.push(item);
      return;
    }
    while (true) {
      let top = stack.at(-1);
      if (top < 0) {
        stack.push(item);
        break;
      };
      const sum = top + item;
      if (sum === 0) {
        stack.pop();
        break;
      } else if (sum > 0) break;
      else stack.pop();
      if (stack.length === 0) {
        stack.push(item);
        break;
      }
    }
  });
  return stack;
};

log([8, -5, 2], asteroidCollision);
log([-5, 8, -8, 2], asteroidCollision);

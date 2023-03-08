/*
 * @Author      : linye
 * @Created At  : 2022-11-08 19:21:29
 * @Description : 1041
 * https://leetcode.cn/problems/robot-bounded-in-circle/
 */

require('./log');

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let x = 0, y = 0;
  const move = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const next = [
    { L: 2, R: 3},
    { L: 3, R: 2},
    { L: 1, R: 0},
    { L: 0, R: 1},
  ];
  let step, dir = 0;
  for (let t = 1; t <= 4; t++) {
    for (let i = 0; i < instructions.length; i++) {
      step = instructions[i];
      if (step === 'G') {
        x += move[dir][0];
        y += move[dir][1];
      } else {
        dir = next[dir][step];
      }
    }
    if (x === 0 && y === 0) return true;
  }
  return false;
};

const s1 = "GGLLGG";
const s2 = "GL";
const s3 = "GG";
log(s1, isRobotBounded)
log(s2, isRobotBounded)
log(s3, isRobotBounded)

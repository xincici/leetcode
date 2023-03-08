/*
 * @Author      : linye
 * @Created At  : 2022-07-26 17:43:52
 * @Description : 1462
 * https://leetcode.cn/problems/course-schedule-iv/
 */

require('./log');

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
  const obj = {};
  for (let i = 0; i < prerequisites.length; i++) {
    const [a, b] = prerequisites[i];
    obj[b] = (obj[b] || new Set([])).add(a);
  }
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const queue = Array.from(obj[key]);
    let idx = 0;
    while (idx < queue.length) {
      const tmp = obj[queue[idx]] || [];
      tmp.forEach(val => {
        obj[key].add(val);
        if (!queue.includes(val)) queue.push(val);
      });
      idx++;
    }
  }
  const res = [];
  for (let i = 0; i < queries.length; i++) {
    const [m, n] = queries[i];
    if (!obj[n]) {
      res[i] = false;
      continue;
    }
    res[i] = obj[n].has(m);
  }
  return res;
};

log(5, [[3,2],[1,0],[0,2]], [[3,4],[1,2]], checkIfPrerequisite );


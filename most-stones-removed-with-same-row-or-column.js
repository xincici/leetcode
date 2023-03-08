/*
 * @Author      : linye
 * @Created At  : 2022-09-07 14:40:25
 * @Description : 947
 * https://leetcode.cn/problems/most-stones-removed-with-same-row-or-column/
 */

/**
 * @param {number[][]} stones
 * @return {number}
 */
class UnionFind {
  constructor(arr = []) {
    this.data = {};
    this.count = arr.length;
    for (let i = 0; i < arr.length; i++) {
      this.data[arr[i]] = arr[i];
    }
  }
  add(p) {
    if (this.data[p] !== undefined) return;
    this.data[p] = p;
    this.count++;
  }
  union(p, q) {
    const rp = this.find(p);
    const rq = this.find(q);
    if (rp === rq) return;
    this.data[rq] = rp;
    this.count--;
  }
  find(x) {
    if (this.data[x] != x) {
      this.data[x] = this.find(this.data[x]);
    }
    return this.data[x];
  }
}
var removeStones = function(stones) {
  const len = stones.length;
  const uf = new UnionFind();
  for (let i = 0; i < len; i++) {
    const one = stones[i];
    uf.add(one[0] + 10001);
    uf.add(one[1]);
    uf.union(one[0] + 10001, one[1]);
  }
  return len - uf.count;
};

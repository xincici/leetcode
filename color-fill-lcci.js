/*
 * @Author      : linye
 * @Created At  : 2022-08-19 19:06:55
 * @Description : 08.10
 * https://leetcode.cn/problems/color-fill-lcci/
 */

require('./log');

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var map = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var floodFill = function(image, sr, sc, newColor) {
  const cache = [`${sr},${sc}`];
  const queue = [[sr, sc]];
  const row = image.length;
  const col = image[0].length;
  const color = image[sr][sc];
  while (queue.length) {
    const item = queue.pop();
    const [r, c] = item;
    image[r][c] = newColor;
    map.forEach(val => {
      const [rr, cc] = val;
      const nr = r + rr, nc = c + cc;
      if (nr < 0 || nr >= row || nc < 0 || nc >= col) return;
      if (cache.includes(`${nr},${nc}`)) return;
      if (image[nr][nc] !== color) return;
      image[nr][nc] = newColor;
      queue.push([nr, nc]);
      cache.push(`${nr},${nc}`);
    });
  }
  return image;
};

log([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2, floodFill);

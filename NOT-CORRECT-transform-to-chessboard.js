/*
 * @Author      : linye
 * @Created At  : 2022-08-23 10:13:35
 * @Description : 782
 * https://leetcode.cn/problems/transform-to-chessboard/
 */

require('./log');

/**
 * @param {number[][]} board
 * @return {number}
 */
// 可以 AC，但其实是错的
var movesToChessboard = function(board) {
  const n = board.length;
  // 行列是否是偶数
  const even = n % 2 === 0;
  // 每一行或一列的累加值必须在这个范围内
  const a1 = even ? [n >> 1] : [n >> 1, (n >> 1) + 1];
  // 总数的累加值必须在这个范围内
  const a2 = even ? [n * n >> 1] : [n * n >> 1, (n * n >> 1) + 1];
  const row = new Array(n).fill(0); // 保存每一行的累加值
  const col = new Array(n).fill(0); // 保存每一列的累加值
  const d1 = new Array(n).fill(0); // 用来计算每一行相邻相等的组合个数
  const d2 = new Array(n).fill(0); // 用来计算每一列相邻相等的组合个数
  const f1 = new Array(n).fill(true); // 行标志位，出现相等的组合保证下标右移
  const f2 = new Array(n).fill(true); // 列标志位，出现相等的组合保证下标下移
  // 总数和
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j !== 0) { // 需要判断和前一列是否相等，所以跳过第一列
        if (!f1[i]) f1[i] = true;
        else if (board[i][j] === board[i][j - 1]) {
          d1[i]++;
          f1[i] = false;
        }
      }
      if (i !== 0) { // 需要判断和前一行是否相等，所以跳过第一行
        if (!f2[j]) f2[j] = true;
        else if (board[i][j] === board[i - 1][j]) {
          d2[j]++;
          f2[j] = false;
        }
      }
      sum += board[i][j]; // 总数累加 
      row[i] += board[i][j]; // 行和累加
      col[j] += board[i][j]; // 列和累加
      // 某一列的累加值不符合，直接 -1
      if (i === n - 1 && !a1.includes(col[j])) return -1; 
    }
    // 某一行的累加值不符合，直接 -1
    if (!a1.includes(row[i])) return -1;
  }
  // 总数不符合，直接 -1
  if (!a2.includes(sum)) return -1;
  // 每一行相邻相等的组合个数应该全部一样，否则 -1
  // 这个结论是错的！！！
  if (new Set(d1).size !== 1 || new Set(d2).size !== 1) return -1;
  // 0 还是 1 出现的次数多，处理 n 是奇数的情况，偶数随意
  const more = (sum < n * n / 2) ? 0 : 1;
  // 行和列不符合要求的元素个数
  let res1 = res2 = 0;
  // 选定使用哪一行和哪一列
  // n 为偶数时，无差别，直接选 0 行和 0 列
  // n 为奇数时，选择出现 more 次数多的那一行和那一列
  // 参考 a1 上边的定义
  let idx1 = even ? 0 : row.indexOf(a1[more]);
  let idx2 = even ? 0 : col.indexOf(a1[more]);
  // 做一次遍历
  for (let i = 0; i < n; i++) {
    // 偶数位元素，必须和 more 值相等，否则不符合数 +1
    if (i % 2 === 0) {
      res1 += (board[idx1][i] === more ? 0 : 1);
      res2 += (board[i][idx2] === more ? 0 : 1);
    } else {
    // 奇数位元素，如果和 more 值相等，则不符合数 +1
      res1 += (board[idx1][i] === more ? 1 : 0);
      res2 += (board[i][idx2] === more ? 1 : 0);
    }
  }
  // 当行列数为偶数时，因为可以随意控制方向，所以取 n - x 和 x 的最小值即可
  if (even) {
    res1 = Math.min(n - res1, res1);
    res2 = Math.min(n - res2, res2);
  }
  // 行列需要的变化数分别为不符合数目除以 2 向上取整，结果为相加即可
  return (res1 + 1 >> 1) + (res2 + 1 >> 1);
};

//const board = [
//  [1,1,1,0,0,0,1,1,0,0,0,1],
//  [0,0,0,1,1,1,0,0,1,1,1,0],
//  [0,0,0,1,1,1,0,0,1,1,1,0],
//  [1,1,1,0,0,0,1,1,0,0,0,1],
//  [0,0,0,1,1,1,0,0,1,1,1,0],
//  [1,1,1,0,0,0,1,1,0,0,0,1],
//  [0,0,0,1,1,1,0,0,1,1,1,0],
//  [1,1,1,0,0,0,1,1,0,0,0,1],
//  [1,1,1,0,0,0,1,1,0,0,0,1],
//  [1,1,1,0,0,0,1,1,0,0,0,1],
//  [0,0,0,1,1,1,0,0,1,1,1,0],
//  [0,0,0,1,1,1,0,0,1,1,1,0]
//]
const board = [
  [1,1,1,0,0],
  [1,1,1,0,0],
  [0,0,1,1,1],
  [0,0,0,1,1],
  [0,0,0,1,1]
]
// const board = [
//   [0,1,0],
//   [1,0,1],
//   [0,1,0]
// ]
log(board, movesToChessboard)


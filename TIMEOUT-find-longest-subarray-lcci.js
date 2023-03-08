/*
 * @Author      : linye
 * @Created At  : 2022-07-25 20:01:50
 * @Description : 
 * https://leetcode.cn/problems/find-longest-subarray-lcci/
 */

require('./log');

const isNum = v => /\d/.test(v);

/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function(array) {
  const alen = array.length;
  const nlen = array.filter(v => isNum(v)).length;
  const llen = alen - nlen;
  if (nlen === 0 || llen === 0) return [];
  if (nlen === llen) return array;
  let len = 0;
  const dp = [];
  let nlen1 = nlen, llen1 = llen;
  for (let i = 0; i < array.length; i++) {
    if (alen - i <= len) break;
    if (i !== 0) {
      if (isNum(array[i - 1])) nlen1--;
      else llen1--;
    }
    if (nlen1 === llen1) {
      dp[i] = len = nlen1 * 2;
      break;
    }
    let nlen2 = nlen1, llen2 = llen1;
    for (let j = array.length - 1; j > i; j--) {
      if (len >= j - i + 1) break;
      if (j !== array.length - 1) {
        if (isNum(array[j + 1])) nlen2--;
        else llen2--;
      }
      if (llen2 === nlen2) {
        dp[i] = len = nlen2 * 2;
        break;
      }
    }
  }
  console.log({ dp });
  for (let i = dp.length - 1; i > 0; i--) {
    if (dp[i] === len) return array.slice(i, i + len);
  }
};

// const arr = ["D", "C", "A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]
const arr1 = ['A', 'D', '1', 'F', 'H'];
const arr2 = ["42","10","O","t","y","p","g","B","96","H","5","v","P","52","25","96","b","L","Y","z","d","52","3","v","71","J","A","0","v","51","E","k","H","96","21","W","59","I","V","s","59","w","X","33","29","H","32","51","f","i","58","56","66","90","F","10","93","53","85","28","78","d","67","81","T","K","S","l","L","Z","j","5","R","b","44","R","h","B","30","63","z","75","60","m","61","a","5","S","Z","D","2","A","W","k","84","44","96","96","y","M"];

// log(arr, findLongestSubarray);
log(arr1, findLongestSubarray);
log(arr2, findLongestSubarray);

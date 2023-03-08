/*
 * @Author      : linye
 * @Created At  : 2022-09-21 11:55:35
 * @Description : 1233
 * https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/
 */

require('./log');

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  const res = [];
  let item, flag;
  for (i = 0; i < folder.length; i++) {
    item = folder[i];
    flag = 0;
    console.log({res, item});
    for (let j = 0; j < res.length; j++) {
      if (res[j].startsWith(item + '/')) {
        if (flag === 0) res.splice(j, 1, item);
        else {
          res.splice(j, 1);
          j--;
        }
        flag++;
        continue;
      }
      if (item.startsWith(res[j] + '/')) {
        flag++;
        break;
      }
    }
    if (flag === 0) res.push(item);
  }
  return res;
};

const f = ["/aa/ab/ac/ae","/aa/ab/af/ag","/ap/aq/ar/as","/ap/aq/ar","/ap/ax/ay/az","/ap","/ap/aq/ar/at","/aa/ab/af/ah","/aa/ai/aj/ak","/aa/ai/am/ao"];
log(f, removeSubfolders)

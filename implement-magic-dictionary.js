/*
 * @Author      : linye
 * @Created At  : 2022-07-11 11:46:10
 * @Description : 676
 * https://leetcode.cn/problems/implement-magic-dictionary/
 */

var MagicDictionary = function() {
  this.dict = null;
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  this.dict = dictionary;
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  for (let i = 0; i < this.dict.length; i++) {
    const wd = this.dict[i];
    if (wd === searchWord) continue;
    if (wd.length !== searchWord.length) continue;
    let flag = false;
    for (let j = 0; j < wd.length; j++) {
      if (wd[j] === searchWord[j]) continue;
      if (flag) {
        flag = false;
        break;
      };
      flag = true;
    }
    if (flag) return true;
  }
  return false;
};

/*
 * @Author      : linye
 * @Created At  : 2022-07-25 18:24:25
 * @Description : 208
 * https://leetcode.cn/problems/implement-trie-prefix-tree/
 */

var Trie = function() {
  this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let last;
  word.split('').forEach((letter, idx) => {
    if (idx === 0) {
      this.root[letter] = this.root[letter] || {};
      last = this.root[letter];
    } else {
      last[letter] = last[letter] || {};
      last = last[letter];
    }
  });
  last.end = true;
  return null;
};

Trie.prototype._innerSearch = function(word) {
  let last = this.root[word[0]];
  if (!last) return false;
  for (let i = 1; i < word.length; i++) {
    if (!last[word[i]]) return false;
    else last = last[word[i]];
  }
  return last;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const res = this._innerSearch(word);
  if (!res) return false;
  return Boolean(res.end);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(word) {
  return Boolean(this._innerSearch(word));
};


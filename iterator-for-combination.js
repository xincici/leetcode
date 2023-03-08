/*
 * @Author      : linye
 * @Created At  : 2022-07-20 14:26:06
 * @Description : 1286
 * https://leetcode.cn/problems/iterator-for-combination/
 */

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.str = characters;
  this.strLen = characters.length;
  this.comLen = combinationLength;
  this.nextResult = this.str.slice(0, this.comLen);
  let idx = 0;
  this.idxs = Array.from({ length: this.comLen }, () => idx++);
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  const tmp = this.nextResult;
  if (!tmp) return null;
  let i = this.idxs.length - 1;
  let j = 0;
  let num;
  for (; i >= 0; i--) {
    num = this.idxs[i];
    if (num < this.strLen - j - 1) {
      this.idxs[i] = num + 1;
      break;
    }
    j++;
  }
  if (i < 0) {
    this.nextResult = null;
    return tmp;
  }
  num = this.idxs[i];
  i++;
  j = 0;
  for (; i < this.idxs.length; i++) {
    this.idxs[i] = num + (++j);
  }
  this.nextResult = this.idxs.reduce((sum, cur) => {
    return sum + this.str[cur];
  }, '');
  return tmp;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return Boolean(this.nextResult);
};

const obj = new CombinationIterator('abcde', 3);
console.log('----', obj.next());
console.log('----', obj.hasNext());
console.log('===================');
console.log('----', obj.next());
console.log('----', obj.hasNext());
console.log('===================');
console.log('----', obj.next());
console.log('----', obj.hasNext());
console.log('===================');
console.log('----', obj.next());
console.log('----', obj.hasNext());
console.log('===================');
console.log('----', obj.next());
console.log('----', obj.hasNext());
console.log('===================');
console.log('----', obj.next());
console.log('----', obj.hasNext());
console.log('===================');
console.log('----', obj.next());
console.log('----', obj.hasNext());

/*
 * @Author      : linye
 * @Created At  : 2022-08-24 15:15:03
 * @Description : 273
 * https://leetcode.cn/problems/integer-to-english-words/
 */

require('./log');

/**
 * @param {number} num
 * @return {string}
 */

const digit = {
  '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five', '6': 'Six',
  '7': 'Seven', '8': 'Eight', '9': 'Nine', '10': 'Ten', '11': 'Eleven',
  '12': 'Twelve', '13': 'Thirteen', '14': 'Fourteen', '15': 'Fifteen',
  '16': 'Sixteen', '17': 'Seventeen', '18': 'Eighteen', '19': 'Nineteen',
  '20': 'Twenty', '30': 'Thirty', '40': 'Forty', '50': 'Fifty',
  '60': 'Sixty', '70': 'Seventy', '80': 'Eighty', '90': 'Ninety',
  '100': 'Hundred',
  '1000': 'Thousand',
  '1000000': 'Million',
  '1000000000': 'Billion',
}

var numberToWords = function(num) {
  if (num === 0) return 'Zero';
  function inner(num) {
    num = +num;
    const str = String(num);
    const len = str.length;
    if (num >= 10 ** 9) {
      let max = inner(str.slice(0, len - 9));
      let min = inner(str.slice(-9));
      return max + ' Billion' + (min ? ' ' + min : '');
    }
    if (num >= 10 ** 6) {
      let max = inner(str.slice(0, len - 6));
      let min = inner(str.slice(-6));
      return max + ' Million' + (min ? ' ' + min : '');
    }
    if (num >= 1000) {
      let max = inner(str.slice(0, len - 3));
      let min = inner(str.slice(-3));
      return max + ' Thousand' + (min ? ' ' + min : '');
    }
    if (num >= 100) {
      let max = inner(str.slice(0, len - 2));
      let min = inner(str.slice(-2));
      return max + ' Hundred' + (min ? ' ' + min : '');
    }
    if (num <= 20) return digit[str] || '';
    if (num % 10 === 0) return digit[num];
    return digit[num - num % 10] + ' ' + digit[num % 10];
  }
  const res = inner(num);
  return res.trim();
};

log(100000, numberToWords);
log(54321234567890, numberToWords);
log(100000000000, numberToWords);

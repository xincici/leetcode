/*
 * @Author      : linye
 * @Created At  : 2022-07-19 10:28:56
 * @Description : 731
 * https://leetcode.cn/problems/my-calendar-ii/
 */

var isConflict = function(t1, t2) {
  const [ts1, te1] = t1;
  const [ts2, te2] = t2;
  if (te1 - ts1 + te2 - ts2 > Math.max(te1, te2) - Math.min(ts1, ts2)) {
    return [Math.max(ts1, ts2), Math.min(te1, te2)];
  }
  return false;
};

var MyCalendarTwo = function() {
  this.list = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  const tmp = [];
  for (let i = 0; i < this.list.length; i++) {
    const item = this.list[i];
    const res = isConflict(item, [start, end]);
    if (!res) continue;
    if (tmp.find(one => {
      return isConflict(one, res);
    })) return false;
    tmp.push(res);
  }
  this.list.push([start, end]);
  return true;
};

const args = [[47,50],[1,10],[27,36],[40,47],[20,27],[15,23],[10,18],[27,36],[17,25],[8,17],[24,33],[23,28],[21,27],[47,50],[14,21],[26,32],[16,21],[2,7],[24,33],[6,13],[44,50],[33,39],[30,36],[6,15],[21,27],[49,50],[38,45],[4,12],[46,50],[13,21]];

const res = [true,true,true,true,true,true,true,true,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false];

const cal = new MyCalendarTwo();

args.forEach((item, idx) => {
  console.log(cal.book(...item), res[idx], item);
});

/*
 * @Author      : linye
 * @Created At  : 2022-08-17 14:05:35
 * @Description : 2207
 * https://leetcode.cn/problems/maximize-number-of-subsequences-in-a-string/
 */

require('./log');

/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */

var maximumSubsequenceCount = function(text, pattern) {
  const a = pattern[0], b = pattern[1];
  let sum = ca = cb = 0;
  for (let i = 0; i < text.length; i++) {
    if (a !== text[i] && b !== text[i]) continue;
    if (b === text[i]) {
      sum += ca;
      cb++;
    }
    if (a === text[i]) {
      ca++;
    }
  }
  return sum + Math.max(ca, cb);
};

var maximumSubsequenceCount_1 = function(text, pattern) {
  const a = pattern[0], b = pattern[1];
  if (a === b) {
    let cnt = (text.match(new RegExp(a, 'g')) || []).length;
    if (cnt <= 1) return cnt;
    let sum = 0;
    while (cnt > 0) {
      sum += cnt;
      cnt--;
    }
    return sum;
  }
  let ca = (text.match(new RegExp(a, 'g')) || []).length;
  let cb = (text.match(new RegExp(b, 'g')) || []).length;
  if (ca === 0 && cb === 0) return 0;
  if (ca === 0 || cb === 0) return ca + cb;
  const max = Math.max(ca, cb);
  let sum = 0;
  for (let i = 0; i < text.length; i++) {
    if (ca === 0 && cb === 0) break;
    if (a !== text[i] && b !== text[i]) continue;
    if (a === text[i]) {
      sum += cb;
      ca--;
    } else {
      cb--;
    }
  }
  return sum + max;
};

// log('abdcdbc', 'ac', maximumSubsequenceCount)
// log('aabb', 'aa', maximumSubsequenceCount)
log("vnedkpkkyxelxqptfwuzcjhqmwagvrglkeivowvbjdoyydnjrqrqejoyptzoklaxcjxbrrfmpdxckfjzahparhpanwqfjrpbslsyiwbldnpjqishlsuagevjmiyktgofvnyncizswldwnngnkifmaxbmospdeslxirofgqouaapfgltgqxdhurxljcepdpndqqgfwkfiqrwuwxfamciyweehktaegynfumwnhrgrhcluenpnoieqdivznrjljcotysnlylyswvdlkgsvrotavnkifwmnvgagjykxgwaimavqsxuitknmbxppgzfwtjdvegapcplreokicxcsbdrsyfpustpxxssnouifkypwqrywprjlyddrggkcglbgcrbihgpxxosmejchmzkydhquevpschkpyulqxgduqkqgwnsowxrmgqbmltrltzqmmpjilpfxocflpkwithsjlljxdygfvstvwqsyxlkknmgpppupgjvfgmxnwmvrfuwcrsadomyddazlonjyjdeswwznkaeaasyvurpgyvjsiltiykwquesfjmuswjlrphsdthmuqkrhynmqnfqdlwnwesdmiiqvcpingbcgcsvqmsmskesrajqwmgtdoktreqssutpudfykriqhblntfabspbeddpdkownehqszbmddizdgtqmobirwbopmoqzwydnpqnvkwadajbecmajilzkfwjnpfyamudpppuxhlcngkign", "rr", maximumSubsequenceCount)

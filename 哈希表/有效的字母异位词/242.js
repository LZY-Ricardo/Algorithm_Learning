// 242. 有效的字母异位词
var isAnagram = function(s, t) { // 数组哈希表
    let hash = new Array(26).fill(0) // 为26个字母创建一个数组哈希表
    let base = 'a'.charCodeAt() // 字母a的ascii码
    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            hash[s[i].charCodeAt() - base]++ // s字符串每个字母出现 哈希表里对应的字母次数+1
            hash[t[i].charCodeAt() - base]-- // t字符串每个字母出现 哈希表里对应的字母次数-1
        }
        for (let i = 0;i < hash.length; i++) {
            if (hash[i] !== 0) return false // 哈希表每个字母出现次数都为0 则是字母异位词
        }
        return true
    } else return false
};
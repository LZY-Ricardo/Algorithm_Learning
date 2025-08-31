// 3. 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) { // 双指针 加 map哈希表
//     let left = 0
//     let right = 0
//     let map = new Map()
//     let max = 0
//     while (right < s.length) {
//         let char = s.charAt(right)
//         if (map.has(char) && map.get(char) >= left) {
//             left = map.get(char) + 1
//         }
//         map.set(char, right)
//         max = Math.max(max, right - left + 1)
//         right++ 
//     }
//     return max
// };

var lengthOfLongestSubstring = function(s) {
    let right = 0
    let set = new Set()
    const n = s.length
    let max = 0
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            set.delete(s.charAt(i - 1)) // 删除前一个位置的字符
        }
        while (right < n && !set.has(s.charAt(right))) {
            set.add(s.charAt(right))
            right++
        }
        console.log(set);
        
        max = Math.max(max, right - i)
    }
    return max
};

s = "pwwkew"
console.log(lengthOfLongestSubstring(s))

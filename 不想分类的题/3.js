// 3. 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) { // 双指针 + 哈希表(map)
    let max = 0
    let left = 0, right = 0
    let map = new Map()
    while (right < s.length) {
        let char = s[right]
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1
        }
        map.set(char,right)
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
};
// 438. 找到字符串中所有字母异位词
// var findAnagrams = function(s, p) {  // 测试用例太大, 会超时
//     let result = new Array()
//     let left = 0
//     let right = p.length - 1
//     while (right < s.length) {
//         let str = s.slice(left, right + 1) 
//         let arr = [...str]
//         arr.sort()
//         if (arr.join('') === [...p].sort().join('')) {
//             result.push(left)
//         }
//         left++
//         right++
//     }
//     return result
// };


var findAnagrams = function(s, p) {  
    let result = new Array()
    let pLen = p.length
    let sLen = s.length
    if (sLen < pLen) return result
    let pCount = new Array(26).fill(0)
    let windowCount = new Array(26).fill(0)
    let base = 'a'.charCodeAt()

    // 初始化计数
    for (let c of p) {
        pCount[c.charCodeAt() - base]++
    }
    for (let i = 0; i < pLen; i++) {
        windowCount[s.charCodeAt(i) - base]++
    }

    // 比较初始化窗口
    if (pCount.join('') === windowCount.join('')) {
        result.push(0)
    }

    // 滑动窗口
    for (let i = pLen; i < sLen; i++) {
        // 移出左边界的字符
        windowCount[s.charCodeAt(i - pLen) - base]--
        // 移入右边界的字符
        windowCount[s.charCodeAt(i) - base]++

        // 比较当前窗口
        if (pCount.join('') === windowCount.join('')) {
            result.push(i - pLen + 1)
        }
    }
    return result
};

s = "cbaebabacd", p = "abc"
console.log([...s].sort().join(''));

console.log(findAnagrams(s, p))
// 28. 找出字符串中第一个匹配项的下标

// var strStr = function(haystack, needle) { // 暴力匹配
//     let n = haystack.length, m = needle.length
//     for (let i = 0; i + m <= n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (haystack[i + j] !== needle[j]) {
//                 break
//             } 
//             if (j === m - 1) {
//                 return i
//             }
//         }
//     }
//     return -1
// };

var strStr = function(haystack, needle) {
    let n = haystack.length, m = needle.length
    if (m === 0) return -1
    let next = getNext(needle)
    let i = 0, j = 0
    while (i < n && j < m) {
        if (haystack[i] === needle[j]) {
            i++
            j++
        } else if (j > 0) {
            j = next[j]
        } else {
            i++
        }
        if (j === m) {
            return i - j
        }
    }
    return -1
};

function getNext(needle) {
    let next = []
    let comp = 0
    let cur = 2
    next[0] = 0
    next[1] = 0
    while (cur < needle.length) {
        if (needle[cur - 1] === needle[comp]) {
            next[cur] = comp + 1
            cur++
            comp++
        } else if (comp > 0) {
            comp = next[comp]
        } else {
            next[cur] = 0
            cur++
        }
    }
    return next
}
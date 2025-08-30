// 20. 有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }
    const stack = []
    for (const c of s) {
        if (map[c]) {
            stack.push(map[c])
        } else {
            const cur = stack.pop()
            if (cur !== c) return false
        }
    }
    if (stack.length) return false
    return true
}

// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m, n, ...nums2 )
//     nums1.sort((a, b) => a - b)
// }
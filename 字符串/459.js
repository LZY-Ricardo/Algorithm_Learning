// 459. 重复的子字符串
// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
// var repeatedSubstringPattern = function(s) { 
//      // 将原字符串拼接自身，然后去掉首尾字符
//      let s1 = (s + s).slice(1, -1)
//     // 如果拼接后的字符串包含原字符串，则说明可由重复子串构成
//     return s1.indexOf(s) !== -1
// };

// var repeatedSubstringPattern = function(s) { // 暴力解法
//     for (let len = 1; len <= s.length/2; len++) {
//         let str = s.slice(0, len)
//         let match = true
//         for (let i = len; i < s.length; i+=len) {
//             if (s.slice(i, i + len) !== str) {
//                 match = false
//             }
//         }
//         if (match) return true
//     }
//     return false
// }

// 判断字符串是否由重复子串构成的函数
var repeatedSubstringPattern = function(s) {
    // 获取字符串的next数组
    let next = getNext(s)
    let len = s.length
    
    // 判断条件：
    // 1. next数组最后一个元素大于0（表示有最长相同前后缀）
    // 2. 字符串长度能被(字符串长度-最长前后缀长度)整除
    if (next[len - 1] > 0 && len % (len - next[len - 1]) === 0) {
        return true
    }
    return false
}

// 生成KMP算法中的next数组
function getNext(needle) {
    let next = []  // next数组
    let comp = 0   // 比较指针
    let cur = 1    // 当前指针
    next[0] = 0    // 第一个字符的next值为0
    
    while (cur < needle.length) {
        // 当前字符与比较指针所指字符相同
        if (needle[comp] === needle[cur]) {
            next[cur] = comp + 1  // next值为比较指针位置+1
            comp++
            cur++
        } 
        // 不相同但比较指针大于0
        else if (comp > 0) {
            comp = next[comp - 1]  // 回退比较指针
        }
        // 不相同且比较指针为0
        else {
            next[cur] = 0  // next值为0
            cur++
        }
    }
    
    return next
}

s = "abac"
console.log(repeatedSubstringPattern(s));

console.log(getNext(s));
console.log(getNext(s)[s.length - 1]);




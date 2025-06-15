// 定义一个函数 minWindow，用于在字符串 s 中找到包含字符串 t 所有字符的最小窗口
var minWindow = function(s, t){
    // 如果字符串 s 的长度小于字符串 t 的长度，直接返回空字符串，因为不可能存在符合条件的窗口
    if (s.length < t.length) return ""
    let left = 0, right = 0
    // 创建一个 Map 来存储字符串 t 中每个字符的出现次数
    let need = new Map()
    // 创建一个 Map 来存储当前窗口中每个字符的出现次数
    let window = new Map()
    // 记录当前窗口中已经满足字符串 t 中字符出现次数要求的字符种类数
    let sub = 0
    // 遍历字符串 t，统计每个字符的出现次数
    for (let i = 0; i < t.length; i++) {
        // 如果字符已经在 need 中，将其计数加 1；否则，将其计数初始化为 1
        need.set(t[i], need.get(t[i]) ? need.get(t[i]) + 1 : 1)
    }
    // 初始化最小窗口的起始位置和长度，初始长度设为无穷大
    let start = 0, len = Infinity
    // 当右指针未到达字符串 s 的末尾时，继续扩展窗口
    while (right < s.length) {
        // 获取当前右指针指向的字符
        let c = s[right]
        // 如果当前字符在字符串 t 中
        if (need.has(c)) {
            // 更新当前窗口中该字符的出现次数
            window.set(c, (window.get(c) || 0) + 1)
            // 如果当前窗口中该字符的出现次数等于字符串 t 中该字符的出现次数
            if (window.get(c) === need.get(c)) {
                // 满足要求的字符种类数加 1
            sub++
            }
        }
        // 右指针右移一位，扩展窗口
        right++
        // 当当前窗口已经包含字符串 t 的所有字符时，尝试缩小窗口
        while (sub === need.size) {
            // 如果当前窗口的长度小于之前记录的最小长度
            if (right - left < len) {
                // 更新最小窗口的起始位置
                start = left
                // 更新最小窗口的长度
                len = right - left
            }
            // 获取当前左指针指向的字符
            let d = s[left]
            // 左指针右移一位，缩小窗口
            left++
            // 如果当前字符在字符串 t 中
            if (need.has(d)) {
                // 如果当前窗口中该字符的出现次数等于字符串 t 中该字符的出现次数
                if (window.get(d) === need.get(d)) {
                    // 满足要求的字符种类数减 1
                    sub--
                }
                // 更新当前窗口中该字符的出现次数
                window.set(d, window.get(d) - 1)
            }
        }
    }
    // 如果最小长度仍为无穷大，说明没有找到符合条件的窗口，返回空字符串；否则，返回最小窗口的子字符串
    return len === Infinity ? "" : s.slice(start, start + len)
};
// 测试用例注释，原测试用例 s = "ADOBECODEBANC", t = "ABC"
// s = "ADOBECODEBANC", t = "ABC"
// 测试用例，s = "aa", t = "aa"
s = "aa", t = "aa"
// 打印测试用例的结果
console.log(minWindow(s, t))

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let n = num1.length
    let m = num2.length
    let str1 = num1
    let str2 = num2
    if (n < m) {
        str1 = num1.padStart(m, '0') // 用0填充num1，使num1和num2的长度相等
        n = m
    } else {
        str2 = num2.padStart(n, '0') // 用0填充num2，使num1和num2的长度相等
        m = n
    }
    let res = ''
    let cur = 0 // 进位
    for (let i = n - 1; i >= 0; i--) { // 从个位数开始相加
        let sum = Number(str1.charAt(i)) + Number(str2.charAt(i)) + cur
        cur = Math.floor(sum / 10)
        res = sum % 10 + res
    }
    if (cur) res = 1 + res // 最后如果有进位，需要在最前面加上1
    return res
};
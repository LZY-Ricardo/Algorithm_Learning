// 54. 替换数字（第八期模拟笔试）
// 给定一个字符串 s，它包含小写字母和数字字符，
// 请编写一个函数，将字符串中的字母字符保持不变，而将每个数字字符替换为number。 
// 例如，对于输入字符串 "a1b2c3"，函数应该将其转换为 "anumberbnumbercnumber"。
var replaceDigits = function (s) {
    let arr = [...s]
    let n = 0
    for (let i = 0; i < arr.length; i++) {
        if (isChar(arr[i])) {
            n++
        } else if (isNum(arr[i])) {
            n+=6
        }
    }
    let res = new Array(n).fill(0)
    let j = 0
    for (let i = 0; i < arr.length; i++ ) {
        if (isChar(arr[i])) {
            res[j++] = arr[i]
        } else if (isNum(arr[i])) {
            res[j++] = 'n'
            res[j++] = 'u'
            res[j++] = 'm'
            res[j++] = 'b'
            res[j++] = 'e'
            res[j++] = 'r'
        }
    }
    return res.join('')
};
function isChar(c) {
    return c >= 'a'&& c <= 'z'
}
function isNum(n) {
    return n >= '0' && n <= '9'
}
s = 'a1b2c3'
console.log(replaceDigits(s));


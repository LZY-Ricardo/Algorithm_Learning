// 394. 字符串解码
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [] // 存倍数的栈
    let strStack = [] // 存 待拼接的 str 的栈
    let num = 0
    let str = ''
    for (const char of s) {
        if (!isNaN(char)) { // 遇到数字
            num = num * 10 + Number(char) // 有可能是连续的数字 算出倍数
        } else if (char === '[') { // 遇到 [
            strStack.push(str) // str 入栈
            str = '' // 清零
            numStack.push(num) // num 入栈
            num = 0 // 清零
        } else if (char === ']') { // 遇到 ]    两个栈的栈顶出栈
            let repeatsTimes = numStack.pop() // 获取拷贝的次数
            str = strStack.pop() + str.repeat(repeatsTimes) // 构建字串
        } else {
            str = str + char // 遇到字母追加到 str 后面
        }
    }
    return str
}; 
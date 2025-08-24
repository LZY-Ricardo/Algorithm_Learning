// 43. 字符串相乘
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // 边界情况：如果任一数字为0，直接返回'0'
    if (num1 === '0' || num2 === '0') return '0'
    
    // 获取两个字符串的长度
    let len1 = num1.length
    let len2 = num2.length
    
    // 创建结果数组，长度为两数长度之和（乘法结果最多为m+n位）
    const pos = new Array(len1 + len2).fill(0)

    // 从右到左遍历两个数字，模拟手工乘法
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            // 获取当前位的数字
            const n1 = +num1.charAt(i)
            const n2 = +num2.charAt(j)
            
            // 计算两位数字的乘积
            const multi = n1 * n2
            
            // 加上之前的进位，得到当前位置的总和
            const sum = multi + pos[i + j + 1]

            // 当前位保留个位数
            pos[i + j + 1] = sum % 10
            
            // 十位数作为进位加到前一位
            pos[i + j] += Math.floor(sum / 10)
        }
    }
    
    // 找到第一个非零位，去除前导零
    let start = 0
    while (start < pos.length && pos[start] == 0) {
        start++
    }
    
    // 将数组转换为字符串返回
    return pos.slice(start).join('')
};
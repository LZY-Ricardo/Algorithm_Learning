// 738. 单调递增的数字
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    // 如果n小于10，直接返回n（单个数字总是单调递增的）
    if (n < 10) return n;
    
    // 将数字转换为字符串以便处理
    let str = n + '';
    let len = str.length;
    let res = str.split(''); // 转换为字符数组
    let flag = len; // 标记从哪个位置开始全部置为9
    
    // 从右向左遍历
    for (let i = len - 1; i > 0; i--) {
        // 如果当前数字小于前一个数字，需要调整
        if (res[i] < res[i - 1]) {
            res[i - 1]--; // 前一个数字减1
            flag = i; // 标记从当前位置开始全部置为9
        }
    }
    
    // 从flag位置开始，将所有数字置为9
    for (let i = flag; i < len; i++) {
        res[i] = '9';
    }
    
    // 转换为数字并返回
    return parseInt(res.join(''), 10); // +res.join('')
};
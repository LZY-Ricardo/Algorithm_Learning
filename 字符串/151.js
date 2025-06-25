// 151. 反转字符串中的单词
var reverseWords = function(s) {
    let arr = [...s]
    
    removeExtraSpaces(arr)
    
    reverse(arr, 0, arr.length - 1)
    
    let start = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === ' ' || i === arr.length) {
            reverse(arr, start, i - 1)
            start = i + 1
        }
    }
    return arr.join('')
};

// 删除多余空格
function removeExtraSpaces(strArr) {
    // 初始化双指针：slow指向写入位置，fast指向读取位置
    let slow = 0, fast = 0
    
    // 遍历整个数组
    while(fast < strArr.length) {
        // 判断当前字符是否为空格，且是开头或前一个字符也是空格（即连续空格）
        if (strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
            fast++ // 跳过多余空格
        } else {
            // 保留有效字符或单个空格
            strArr[slow++] = strArr[fast++]
        }
    }
    
    // 处理尾部可能存在的单个空格
    strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow
}

// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
    let l = start, r = end
    while (l < r) {
        [strArr[l], strArr[r]] = [strArr[r], strArr[l]]
        l++
        r--
    }
}
s = "the sky is blue"
s1 = "  hello world  "
console.log(reverseWords(s1));

// const arr = [1, 2, 3, 4, 5];
// reverse(arr, 1, 3);
// console.log(arr); // [1, 4, 3, 2, 5]


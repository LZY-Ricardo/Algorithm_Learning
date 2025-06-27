//55. 右旋字符串（第八期模拟笔试）
// 题目描述
// 字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定一个字符串 s 和一个正整数 k，请编写一个函数，将字符串中的后面 k 个字符移到字符串的前面，实现字符串的右旋转操作。 

// 例如，对于输入字符串 "abcdefg" 和整数 2，函数应该将其转换为 "fgabcde"。

// 输入描述
// 输入共包含两行，第一行为一个正整数 k，代表右旋转的位数。第二行为字符串 s，代表需要旋转的字符串。
// 输出描述
// 输出共一行，为进行了右旋转操作后的字符串。
// 输入示例
// 2
// abcdefg
// 输出示例
// fgabcde
// 提示信息
// 数据范围：
// 1 <= k < 10000,
// 1 <= s.length < 10000;
var deal = function(s, k) {
    str = [...s]
    reverse(str, 0, str.length - 1)
    reverse(str, 0, k - 1)
    reverse(str, k, str.length - 1)
    return str.join('')
}

function reverse(s, start, end) {
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--
    }
    return s
}
s = 'abcdefg'
k = 2
console.log(deal(s, k));

// 125. 验证回文串
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0; // 左指针
    let j = s.length - 1 // 右指针
    while (i < j) {
        let l = s[i].toLowerCase().charCodeAt(0) // 左指针指向的字符的 ASCII 码
        let r = s[j].toLowerCase().charCodeAt(0) // 右指针指向的字符的 ASCII 码
        if (!( (l >= 48 && l <= 57) || (l >= 65 && l <= 90) || (l >= 97 && l <= 122) )) {
            i++ // 左指针指向的字符不是字母或数字，左指针右移
        } else if (!( (r >= 48 && r <= 57) || (r >= 65 && r <= 90) || (r >= 97 && r <= 122) )) {
            j-- // 右指针指向的字符不是字母或数字，右指针左移
        } else if (l === r) { // 左指针指向的字符和右指针指向的字符相等
            i++
            j--
        } else { // 左指针指向的字符和右指针指向的字符不相等
            return false
        }
    }
    return true
};
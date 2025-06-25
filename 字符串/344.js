// 344. 反转字符串

var reverseString = function(s) { // 双指针
    let l = -1, r = s.length // 定义左右指针
    while(++l < --r) { // 当左指针小于右指针时
        [s[l],s[r]] = [s[r],s[l]] // 交换左右指针的值
    }
    return s
};
s = ["h","e","l","l","o"]
console.log(reverseString(s));
// 541. 反转字符串 II

// 主函数：按每2k个字符为一组，反转前k个字符
// var reverseStr = function(s, k) {
//     // 将字符串转为数组便于操作
//     let arr = [...s]
//     // 每次处理2k长度的区间
//     for (let i = 0; i < arr.length; i += 2 * k) {
//       // 如果剩余字符足够k个
//       if (i + k < arr.length) {
//         reverse(arr, i, i + k)  // 反转前k个字符
//       } else {
//         // 否则反转剩余所有字符
//         reverse(arr, i, arr.length)
//       }
//     }
//     return arr.join('')  // 将数组转回字符串
// };

// // 辅助函数：原地反转数组的指定区间
// function reverse(arr, left, right) { 
//     let l = left  // 左指针
//     let r = right - 1  // 右指针
//     // 双指针交换元素直到相遇
//     while(l < r) {
//         [arr[l], arr[r]] = [arr[r], arr[l]]  // 交换元素
//         l++
//         r--
//     }
//     return arr
// }



var reverseStr = function(s, k) {
    const n = s.length;
    const arr = Array.from(s);
    for (let i = 0; i < n; i += 2 * k) {
        reverse(arr, i, Math.min(i + k, n) - 1);
    }
    return arr.join('');
};

const reverse = (arr, left, right) => {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
}


// 测试用例
s = "abcdefg", k = 2
console.log(reverseStr(s, k));
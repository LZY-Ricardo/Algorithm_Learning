// 647. 回文子串
/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function (s) {
//     let res = 0;

//     // 暴力解法：枚举所有可能的子串，并检查是否是回文
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             // 检查子串 s[i...j] 是否是回文
//             if (isPalindrome(s, i, j)) {
//                 res++;
//             }
//         }
//     }
//     return res;
// };
// 辅助函数：检查子串 s[left...right] 是否是回文
function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


var countSubstrings = function (s) { // 动态规划
    let res = 0;

    // 创建DP数组，dp[i][j]表示s[i...j]是否是回文串
    // 初始化 为false 
    let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(false));

    // 递推公式：
    // 如果s[i] === s[j]，且s[i+1...j-1]是回文串，则s[i...j]是回文串

    // 从下往上，从左往右遍历
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            // 如果首尾字符相等
            if (s[i] === s[j]) {
                // 如果子串长度为1或2，则一定是回文
                if (j - i <= 1) {
                    dp[i][j] = true;
                    res++;
                } else if (dp[i + 1][j - 1]) {
                    // 否则，取决于中间部分是否是回文
                    dp[i][j] = true;
                    res++;
                } else { // 该步骤可以省略 因为默认为false
                    // 如果不满足条件，则不是回文
                    dp[i][j] = false;
                }
            } else { // 该步骤可以省略 因为默认为false
                // 如果首尾字符不相等，则不是回文
                dp[i][j] = false;
            }
        }
    }
    return res;
};


var countSubstrings = function (s) { // 动态规划 空间优化
    let res = 0;

    // 创建一维DP数组，dp[j]表示以j结尾的子串是否是回文
    let dp = new Array(s.length).fill(false);

    // 从右往左遍历
    for (let i = s.length - 1; i >= 0; i--) {
        // 保存上一个状态
        let prev = false;

        // 从i往右遍历
        for (let j = i; j < s.length; j++) {
            // 保存当前dp[j]的值
            let temp = dp[j];

            // 如果首尾字符相等
            if (s[i] === s[j]) {
                // 如果子串长度为1或2，则一定是回文
                if (j - i <= 1) {
                    dp[j] = true;
                    res++;
                } else if (prev) {
                    // 否则，取决于前一个状态
                    dp[j] = true;
                    res++;
                } else {
                    // 如果不满足条件，则不是回文
                    dp[j] = false;
                }
            } else {
                // 如果首尾字符不相等，则不是回文
                dp[j] = false;
            }

            // 更新prev为当前dp[j]的旧值
            prev = temp;
        }
    }

    return res;
};

// 测试用例
console.log(countSubstrings("abc"));  // 输出: 3
console.log(countSubstrings("aaa"));  // 输出: 6
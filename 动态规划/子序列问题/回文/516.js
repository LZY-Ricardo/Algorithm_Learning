// 516. 最长回文子序列
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    // 字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]
    let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0));

    // 确定递推公式 
    // 如果s[i] === s[j]，则dp[i][j] = dp[i + 1][j - 1] + 2 
    // 如果s[i] !== s[j]，则dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    // 初始化
    // 当i === j时，dp[i][j] = 1
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
    }

    // 确定遍历顺序
    // 从下往上，从左往右遍历 取决于递推公式
    for (let i = s.length - 1; i >=0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (j - i < 2) {
                    dp[i][j] = j - i + 1;
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }

    return dp[0][s.length - 1]
};


var longestPalindromeSubseq = function(s) { // 空间优化
    let dp = new Array(s.length).fill(0);

    for (let i = s.length - 1; i >=0; i--) {
        let pre = 0;
        for (let j = i; j < s.length; j++) {
            let temp = dp[j]
            if (s[i] === s[j]) {
                if (j - i < 2) {
                    dp[j] = j - i + 1;
                } else {
                    dp[j] = pre + 2;
                }
            } else {
                dp[j] = Math.max(dp[j - 1], dp[j]);
            }
            pre = temp;
        }
    }

    return dp[s.length - 1]
};
// 1143. 最长公共子序列
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length
    // dp[i][j] 表示 长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
    let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0))
    // 确定递推公式 
    // 情况一 当text1[i - 1] === text2[j - 1]时 
    // 两个字符串匹配的字符都前一位的字符所对应的最长公共子序列长度加1 dp[i][j] = dp[i - 1][j - 1] + 1 
    // 情况二 当text1[i - 1] !== text2[j - 1]时
    // 两个字符串不匹配的字符，两个字符串各取前一位字符所对应的最长公共子序列长度的较大值 dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    // 初始化 dp 数组 dp[i][0] = 0 dp[0][j] = 0 当一个字符串去匹配一个空字符串时，最长公共子序列的长度为0
    // 确定遍历顺序 从递推公式可以看出 是从前往后遍历
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            if(text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[n][m]
};



var longestCommonSubsequence = function(text1, text2) { // 空间优化 滚动数组
    const n = text1.length, m = text2.length
    let dp = new Array(m + 1).fill(0)
    for (let i = 1; i < n + 1; i++) {
        // 保存左上角的值，因为dp[j]会被覆盖
        let prev = 0
        for (let j = 1; j < m + 1; j++) {
            // 保存当前值，因为在下一轮中它会成为左上角的值
            let temp = dp[j]
            if(text1[i - 1] === text2[j - 1]) {
                // 字符匹配，使用左上角的值+1
                dp[j] = prev + 1
            } else {
                // 字符不匹配，取上方或左方的最大值
                dp[j] = Math.max(dp[j], dp[j - 1])
            }
            // 更新prev为当前值，供下一轮使用
            prev = temp
        }
    }
    return dp[m]
};
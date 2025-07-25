// 115. 不同的子序列
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length, n = t.length;

    // dp[i][j] 表示以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]
    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))

    // 确定递推公式
    // 当s[i - 1] === t[j - 1]时，
    // 可以用s[i - 1]来匹配，也可以不用s[i - 1]来匹配用s[i - 2]来匹配
    // dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    // 不匹配时 删除s[i - 1] 用s[i - 2] 来匹配
    // 当s[i - 1] !== t[j - 1]时，dp[i][j] = dp[i - 1][j]

    // 初始化 用i - 1为结尾的字符串s 中出现的空字符串的个数为 1
    for (let i = 0; i < m + 1; i++) {
        dp[i][0] = 1
    }
    // 用空字符串 来匹配 非空字符串 时 个数为 0
    for (let j = 1; j < n + 1; j++) {
        dp[0][j] = 0
    }

    // 确定遍历顺序
    // 根据递推公式 从上往下从左往右遍历
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.log(dp);
    
    return dp[m][n]
};


var numDistinct = function(s, t) { // 空间优化
    const m = s.length, n = t.length;

    let dp = new Array(n + 1).fill(0)

    dp[0] = 1

    for (let i = 1; i < m + 1; i++) {
        for (let j = n; j >= 1; j--) { // 倒序遍历 不会覆盖上一次的结果
            if (s[i - 1] === t[j - 1]) {
                dp[j] = dp[j - 1] + dp[j]
            } else {
                dp[j] = dp[j]
            }
        }
    }

    return dp[n]
};

s = "rabbbit"
t = "rabbit"
console.log(numDistinct(s, t));

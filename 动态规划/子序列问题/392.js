// 392. 判断子序列
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index = 0
    for (let i = 0; i < t.length; i++) {
        if (s[index] === t[i]) {
            index++
        }
    }
    return index === s.length
};

var isSubsequence = function(s, t) { // 动态规划
    // dp[i][j] 表示以下标i-1为结尾的字符串s，和以下标j-1为结尾的字符串t，相同子序列的长度为dp[i][j]
    let dp = new Array(s.length + 1).fill().map(() => new Array(t.length + 1).fill(0))
    // 确定递推公式 
    // 如果s[i - 1] === t[j - 1] 那么dp[i][j] = dp[i - 1][j - 1] + 1
    // 否则 dp[i][j] = dp[i][j - 1] 相当于要删除t[j - 1] 与前一位进行比较 也可以理解成直接继承上一次比较的结果
    // 初始化 dp[i][0] = 0 表示s为空字符串 与任何字符串的子序列长度都为0
    // 确定遍历顺序 根据递推公式可得 从上到下 从前往后遍历
    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 1; j < t.length + 1; j++) {
            // 当s[i - 1] === t[j - 1] 时 说明找到了一个相同的字符 可以同时向右移动
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                // 当s[i - 1] !== t[j - 1] 时 说明s[i - 1]与t[j - 1]不相同 可以删除t[j - 1] 与前一位进行比较
                dp[i][j] = dp[i][j - 1]
            }
        }
    }
    // 最后判断dp[s.length][t.length]是否等于s.length 若等于说明s是t的子序列
    return dp[s.length][t.length] === s.length
};



var isSubsequence = function(s, t) { // 动态规划 空间优化
    let dp = new Array(t.length + 1).fill(0)
    for (let i = 1; i < s.length + 1; i++) {
        let pre = dp[0]
        for (let j = 1; j < t.length + 1; j++) {
            let temp = dp[j]
            if (s[i - 1] === t[j - 1]) {
                dp[j] = pre + 1
            } else {
                dp[j] = dp[j - 1]
            }
            pre = temp
        }
    }
    return dp[t.length] === s.length
};
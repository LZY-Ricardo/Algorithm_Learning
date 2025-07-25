// 72. 编辑距离
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let m = word1.length, n = word2.length

    // 表示以下标i-1为结尾的字符串word1，和以下标j-1为结尾的字符串word2，最近编辑距离为dp[i][j]
    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))

    // 初始化：
    // 当 word2 为空字符串时，需要删除 word1 的所有字符
    for (let i = 0; i < m + 1; i++) {
        dp[i][0] = i
    }
    // 当 word1 为空字符串时，需要插入 word2 的所有字符
    for (let j = 1; j < n + 1; j++) {
        dp[0][j] = j
    }

    //// 遍历顺序：从左到右，从上到
    // 因为 dp[i][j] 依赖于 dp[i-1][j], dp[i][j-1] 和 dp[i-1][j-1]
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // 字符串匹配不需要进行编辑操作
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            }
        }
    }

    // 返回将整个 word1 转换为 word2 的最少编辑次数
    return dp[m][n];
};


var minDistance = function(word1, word2) { // 空间优化 
    let m = word1.length, n = word2.length

    let dp = new Array(n + 1).fill(0)

    for (let j = 1; j < n + 1; j++) {
        dp[j] = j
    }

    for (let i = 1; i < m + 1; i++) {
        let pre = dp[0]
        dp[0] = i
        for (let j = 1; j < n + 1; j++) {
            let temp = dp[j]
            if (word1[i - 1] === word2[j - 1]) {
                dp[j] = pre
            } else {
                dp[j] = Math.min(dp[j], dp[j - 1], pre) + 1 
            }
            pre = temp
        }
    }

    // 返回将整个 word1 转换为 word2 的最少编辑次数
    return dp[n];
};

word1 = "horse"
word2 = "ros"
console.log(minDistance(word1, word2));

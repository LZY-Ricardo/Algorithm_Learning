// 583. 两个字符串的删除操作
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/**
 * 计算使两个字符串相同所需的最小删除操作次数
 * @param {string} word1 - 第一个字符串
 * @param {string} word2 - 第二个字符串
 * @return {number} 最小删除次数
 * 
 * 解题思路：通过计算两个字符串的最长公共子序列(LCS)长度
 * 最小删除次数 = word1长度 + word2长度 - 2 * LCS长度
 */
var minDistance = function(word1, word2) {
    const m = word1.length, n = word2.length;

    // dp[i][j] 表示word1前i个字符和word2前j个字符的最长公共子序列(LCS)长度
    // 初始化: dp是(m+1)x(n+1)的二维数组，所有元素初始化为0
    // dp[0][j]和dp[i][0]：空字符串与任何字符串的LCS长度都是0
    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

    // 遍历顺序：从1开始遍历到m和n
    // 因为dp[i][j]依赖于dp[i-1][j-1]、dp[i-1][j]和dp[i][j-1]
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            // 递推公式：
            // 情况1：当前字符匹配(word1[i-1] === word2[j-1])
            // 则dp[i][j] = dp[i-1][j-1] + 1 (在之前LCS基础上增加1)
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // 情况2：当前字符不匹配
                // 则dp[i][j] = max(dp[i-1][j], dp[i][j-1])
                // 即取word1去掉当前字符或word2去掉当前字符两种情况的最大值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // 结果计算：
    // 最小删除次数 = 总长度 - 2 * LCS长度
    // (因为LCS部分不需要删除，其余字符都需要删除)
    return m + n - 2 * dp[m][n];
};


var minDistance = function(word1, word2) {
    const m = word1.length, n = word2.length;

    // dp[i][j] 表示 word1前 i - 1 个字符和 word2前 j - 1 个字符 想要达到相等的 最小步数
    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

    // 确定 递推公式
    // 情况1：word1[i - 1] === word2[j - 1] 当两个字符相等时 不需要进行删除操作
    // dp[i][j] = dp[i - 1][j - 1]
    // 情况2：word1[i - 1] !== word2[j - 1] 当两个字符不相等时  需要进行删除操作 分别删除一个字符 进行比较
    // dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1

    // 初始化
    // dp[i][0]：word1前 i - 1 个字符和空字符串的最小步数
    // dp[0][j]：空字符串和 word2前 j - 1 个字符的最小步数
    for (let i = 0; i < m + 1; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j < n + 1; j++) {
        dp[0][j] = j
    }

    // 确定 遍历顺序
    // 根据 递推公式 从前往后 从上往下 遍历
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
            }
        }
    }
    return dp[m][n]
};

var minDistance = function(word1, word2) { // 动态规划 空间优化
    const m = word1.length, n = word2.length;

    let dp = new Array(n + 1).fill(0);

    for (let j = 0; j < n + 1; j++) {
        dp[j] = j
    }

    for (let i = 1; i < m + 1; i++) {
        // 保存左上角的值
        let pre = dp[0]
        // 当word1前i个字符 与 空字符 进行比较时 只需要删除word1的前i个字符
        dp[0] = i
        for (let j = 1; j < n + 1; j++) {
            let temp = dp[j]
            if (word1[i - 1] === word2[j - 1]) {
                dp[j] = pre
            } else {
                dp[j] = Math.min(dp[j], dp[j - 1]) + 1
            }
            pre = temp
        }
    }
    return dp[n]
};


/**
 * 计算使两个字符串相同所需的最小删除操作次数
 * @param {string} word1 - 第一个字符串
 * @param {string} word2 - 第二个字符串
 * @return {number} 最小删除次数
 * 
 * 解题思路：使用空间优化的动态规划
 * 时间复杂度: O(m*n)
 * 空间复杂度: O(min(m,n))
 */
var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length;

    // 确保 m <= n，优化空间复杂度
    if (m > n) {
        [word1, word2] = [word2, word1];
        [m, n] = [n, m];
    }

    // dp[j] 表示word1前i个字符和word2前j个字符的最小删除次数
    let dp = new Array(n + 1).fill(0);

    // 初始化：当word1为空字符串时，需要删除word2的所有字符
    for (let j = 0; j < n + 1; j++) {
        dp[j] = j;
    }

    // 遍历word1的每个字符
    for (let i = 1; i < m + 1; i++) {
        // 保存左上角的值
        let pre = dp[0];
        // 更新dp[0]：当word2为空字符串时，需要删除word1的所有字符
        dp[0] = i;

        // 遍历word2的每个字符
        for (let j = 1; j < n + 1; j++) {
            // 保存当前dp[j]的值，因为它将成为下一个元素的左上角值
            let temp = dp[j];

            // 状态转移
            if (word1[i - 1] === word2[j - 1]) {
                // 当前字符匹配，不需要删除
                dp[j] = pre;
            } else {
                // 当前字符不匹配，取删除word1或word2中字符的最小值 + 1
                dp[j] = Math.min(dp[j], dp[j - 1]) + 1;
            }

            // 更新左上角的值
            pre = temp;
        }
    }

    return dp[n];
};
// 1035. 不相交的线
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) { // 相当于求最长公共子序列
    let n = nums1.length, m = nums2.length
    
    // dp[i][j] 表示 nums1 前 i - 1 个元素和 nums2 前 j - 1 个元素的最长公共子序列长度
    // 初始化：dp[0][j] = 0, dp[i][0] = 0 因为空序列和任何序列的最长公共子序列长度为 0
    let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0))

    // 递推公式
    // 情况一 当 nums1[i - 1] === nums2[j - 1] 时，dp[i][j] = dp[i - 1][j - 1] + 1
    // 情况二 当 nums1[i - 1] !== nums2[j - 1] 时，dp[i][j] = max(dp[i][j - 1], dp[i - 1][j])

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }

    return dp[n][m]
};


var maxUncrossedLines = function(nums1, nums2) { // 优化空间复杂度
    let n = nums1.length, m = nums2.length
    
    let dp = new Array(m + 1).fill(0)

    for (let i = 1; i < n + 1; i++) {
        let pre = 0
        for (let j = 1; j < m + 1; j++) {
            let temp = dp[j]
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = pre + 1
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1])
            }
            pre = temp
        }
    }

    return dp[m]
};
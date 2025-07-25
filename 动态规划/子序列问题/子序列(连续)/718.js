// 718. 最长重复子数组
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    // 初始化最大长度
    let res = 0 

    // dp[i][j] 表示 以nums1[i - 1]和nums2[j - 1]结尾的最长重复子数组的长度
    // 初始化 全部为0
    let dp = new Array(nums1.length + 1).fill().map(() => new Array(nums2.length + 1).fill(0))

    // 递推公式 dp[i][j] = dp[i - 1][j - 1] + 1
    // 遍历顺序
    // 从前往后
    for (let i = 1; i < nums1.length + 1; i++) {
        for (let j = 1; j < nums2.length + 1; j++) {
            // 遇到nums1[i - 1] === nums2[j - 1]，则更新dp数组
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res
};


var findLength = function(nums1, nums2) { // 滚动数组
    let res = 0 
    
    // dp[i][j]: 以nums1[i-1]、nums2[j-1]为结尾的最长公共子数组的长度
    let dp = new Array(nums2.length + 1).fill(0)

    for (let i = 1; i < nums1.length + 1; i++) {
        for (let j = nums2.length; j > 0; j--) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = dp[j - 1] + 1
            } else {
                dp[j] = 0
            }
            res = Math.max(res, dp[j])
        }
    }
    return res
};
// 96. 不同的二叉搜索树
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 初始化DP数组，dp[i]表示i个不同节点可以构成的二叉搜索树数量
    let dp = new Array(n + 1).fill(0) 
    
    // 基础情况：
    // dp[0] = 1 (空树也算一种情况)
    dp[0] = 1 // 空树也算一颗二叉搜索树
    
    // 计算1到n个节点的情况
    for (let i = 1; i <= n; i++) {
        dp[i] = 0 // 初始化当前dp[i]
        
        // 遍历所有可能的根节点位置j (1 <= j <= i)
        // 左子树有j-1个节点，右子树有i-j个节点
        for (let j = 1; j <= i; j++) {
            // 当前根节点为j时，总数量等于左子树数量乘以右子树数量
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }
    
    // 返回n个节点可以构成的二叉搜索树数量
    return dp[n]
};
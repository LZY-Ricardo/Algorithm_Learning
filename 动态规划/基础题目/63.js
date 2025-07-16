// 63. 不同路径 II
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    // 检查起点或终点是否有障碍物
    if (obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]) return 0
    
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    // 修复：使用map创建独立数组，避免引用共享问题
    let dp = Array(m).fill().map(() => Array(n).fill(0))
    
    // 初始化第一列：遇到障碍物后所有路径都不可达
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            while (i < m) {
                dp[i][0] = 0
                i++
            }
            break
        }
        dp[i][0] = 1
    }
    
    // 初始化第一行：遇到障碍物后所有路径都不可达
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 1) {
            while (j < n) {
                dp[0][j] = 0
                j++
            }
            break
        }
        dp[0][j] = 1
    }
    
    // 填充DP数组：当前格子有障碍物则路径数为0，否则等于上方和左方路径数之和
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            obstacleGrid[i][j] === 1 ? dp[i][j] = 0 : dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    
    for (const item of dp) {
        console.log(item);
    }
    
    // 返回终点位置的路径数
    return dp[m - 1][n - 1]
}

var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = Array(m).fill().map(item => Array(n).fill(0))

    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1
    }

    for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
};


var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 不是障碍物
            if (obstacleGrid[i][j] === 0) {
                if (i === 0) {
                    // 如果是第一行，只能从左边到达  当左侧值为 undefined 时 使用 1 代替
                    obstacleGrid[i][j] = obstacleGrid[i][j - 1] ?? 1
                } else if (j === 0) {
                    // 如果是第一列，只能从上方到达
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] ?? 1
                } else {
                    // 取左边和上边的路径数之和
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
                }
            } else {
                // 如果是障碍物，则路径为0
                obstacleGrid[i][j] = 0
            }
        }
    }
    return obstacleGrid[m - 1][n - 1]
};

obstacleGrid = [[0,0],[1,0]]
console.log(uniquePathsWithObstacles(obstacleGrid))

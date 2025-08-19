// 240. 搜索二维矩阵 II 
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) { // 暴力 超时
    const m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === target) {
                return true
            }
        }
    }
    return false
};


var searchMatrix = function(matrix, target) { // 暴力 加二分法
    const m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i++) {
        let l = 0, r = n - 1
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (matrix[i][mid] === target) {
                return true
            } else if (matrix[i][mid] < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return false
};


var searchMatrix = function(matrix, target) { // 从右上角往左下角查找 可以看成二叉搜索树
    const m = matrix.length, n = matrix[0].length
    let x = 0; y = n - 1
    while (x < m && y >= 0) {
        if (matrix[x][y] > target) {
            y--
        } else if (matrix[x][y] < target) {
            x++
        } else {
            return true
        }
    }
    return false 
};
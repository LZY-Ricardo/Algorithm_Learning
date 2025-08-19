// 48. 旋转图像
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) { // 顺时针旋转九十度 = 二维数组 行列置换 加 水平镜像
    const m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }
    for (let i = 0; i < m; i++) {
        reverse(matrix[i], 0, n - 1)
    }
};


var rotate = function(matrix) {  // 对于矩阵中第 i 行, 第 j 列的元素 旋转后 会到 第 j 行 倒数第 i 列
    const m = matrix.length, n = matrix[0].length
    const arr = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[j][m - 1 - i] = matrix[i][j]
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = arr[i][j]
        }
    }
};


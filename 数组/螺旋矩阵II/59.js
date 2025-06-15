var generateMatrix = function(n) {
    let startx = 0, starty = 0 // 起始位置
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let count = 1
    let layers = Math.floor(n/2) // 旋转圈数
    let mid = Math.floor(n/2) // 中间位置
    let offset = 1 // 控制每一层填充元素个数
    while (layers--) { 
        let i = startx, j = starty
        // 上行从左到右(左闭右开)
        for (; j < n - offset; j++) {
            res[i][j] = count++
        }
        // 右列从上到下(左闭右开)
        for (; i < n - offset; i++) {
            res[i][j] = count++
        }
        // 下行从右到左(左闭右开)
        for (; j > starty; j--) {
            res[i][j] = count++
        }
        // 左列从下到上(左闭右开)
        for (; i > startx; i--) {
            res[i][j] = count++
        }
        // 更新起始位置
        startx++
        starty++
        // 更新offset
        offset++
    }
    // 如果 n 为奇数的话 需要单独给矩阵中间赋值
    if (n % 2 === 1) {
        res[mid][mid] = count
    }
    return res
};
console.log(generateMatrix(3))


var spiralOrder = function(matrix) { 
    // 检查矩阵是否为空 
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) { 
        return []; 
    } 
    
    let startx = 0, starty = 0; 
    let m = matrix.length, n = matrix[0].length; 
    let loop = Math.min(m, n) >> 1; 
    let res = []; 
    let offset = 1; 
    
    while (loop--) { 
        let i = startx, j = starty; 
        // 上行从左到右(左闭右开) 
        for (; j < n - offset; j++) { 
            res.push(matrix[i][j]); 
        } 
        // 右列从上到下(左闭右开) 
        for (; i < m - offset; i++) { 
            res.push(matrix[i][j]); 
        } 
        // 下行从右到左(左闭右开) 
        for (; j > starty; j--) { 
            res.push(matrix[i][j]); 
        } 
        // 左列从下到上(左闭右开) 
        for (; i > startx; i--) { 
            res.push(matrix[i][j]); 
        } 
        startx++; 
        starty++; 
        offset++; 
    } 
    
    // 处理矩阵中心剩余的一行或一列元素（当矩阵最小维度为奇数时）
    if (Math.min(m, n) % 2 === 1) { 
        // 剩余中间一行或一列
        const midx = startx;
        const midy = starty;
        
        if (m > n) { 
            // 剩余一列
            for (let i = midx; i <= m - offset; i++) { 
                res.push(matrix[i][midy]); 
            } 
        } else { 
            // 剩余一行
            for (let j = midy; j <= n - offset; j++) { 
                res.push(matrix[midx][j]); 
            } 
        }
    } 
    
    return res; 
}
// var spiralOrder = function(matrix) {
//     if (!matrix.length || !matrix[0].length) {
//         return [];
//     }
//     let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1;
//     let res = [];
//     while (left <= right && top <= bottom) {
//         // 从左到右
//         for (let j = left; j <= right; j++) res.push(matrix[top][j]);
//         top++;
//         // 从上到下
//         for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
//         right--;
//         if (top <= bottom) {
//             // 从右到左
//             for (let j = right; j >= left; j--) res.push(matrix[bottom][j]);
//             bottom--;
//         }
//         if (left <= right) {
//             // 从下到上
//             for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
//             left++;
//         }
//     }
//     return res
// }
// matrix = [[1,2,3],[4,5,6],[7,8,9]]
// matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// matrix = [[7],[9],[6]]
// matrix = [[3],[2]]
matrix = [[2,5],[8,4],[0,-1]]
console.log(spiralOrder(matrix))
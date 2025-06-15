var spiralArray = function(array) {
    // 处理空数组情况
    if (array.length === 0 || array[0].length === 0) return []
    
    // 初始化四个边界指针
    let left = 0,                  // 左边界
        right = array[0].length - 1, // 右边界
        top = 0,                    // 上边界
        bottom = array.length - 1;  // 下边界
    
    let res = [] // 存储结果的数组
    
    // 当左边界不超过右边界且上边界不超过下边界时继续循环
    while (left <= right && top <= bottom) {
        // 1. 从左到右遍历上边界
        for (let i = left; i <= right; i++) {
            res.push(array[top][i])
        }
        top++ // 上边界下移
        
        // 2. 从上到下遍历右边界
        for(let j = top; j <= bottom; j++) {
            res.push(array[j][right])
        }
        right-- // 右边界左移
        
        // 3. 从右到左遍历下边界（确保上边界不超过下边界）
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                res.push(array[bottom][j])
            }
            bottom-- // 下边界上移
        }
        
        // 4. 从下到上遍历左边界（确保左边界不超过右边界）
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res.push(array[i][left])
            }
            left++ // 左边界右移
        }
    } 
    
    return res
};
array = [[2,5,8],[4,0,-1]]
console.log(spiralArray(array))
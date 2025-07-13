// 452. 用最少数量的箭引爆气球
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    // 按气球起点升序排序
    points.sort((a, b) => a[0] - b[0])
    
    // 初始化结果和当前区间结束点
    let res = 1
    let end = points[0][1]
    
    // 遍历所有气球
    for (let i = 1; i < points.length; i++) {
        // 如果当前气球起点在上一个区间的结束点之前
        if (points[i][0] <= end) {
            // 更新区间结束点为两个气球结束点的较小值
            end = Math.min(end, points[i][1])
        } else {
            // 需要新的箭，增加计数并更新区间结束点
            res++
            end = points[i][1]
        }
    }
    return res
};


var findMinArrowShots = function(points) {
    points.sort((a, b) => {
        return a[0] - b[0]
    })
    let result = 1
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > points[i - 1][1]) {
            result++
        } else {
            points[i][1] = Math.min(points[i][1], points[i - 1][1])
        }
    }
    return result
};
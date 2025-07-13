// 435. 无重叠区间
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // 按区间起点升序排序
    intervals.sort((a , b) => a[0] - b[0])
    
    // 初始化需要移除的区间数和当前区间结束点
    let res = 0
    let end = intervals[0][1]
    
    // 遍历所有区间（修复循环条件：i < intervals.length）
    for (let i = 1; i < intervals.length; i++) {
        // 如果当前区间与前一区间重叠
        if (intervals[i][0] < end) {
            // 需要移除一个区间，计数增加
            res++
            // 保留结束点较小的区间（贪心选择）
            end = Math.min(end, intervals[i][1])
        } else {
            // 不重叠，更新当前区间结束点
            end = intervals[i][1]
        }
    }
    return res
};

var eraseOverlapIntervals = function(intervals) {
    // 按区间起点升序排序
    intervals.sort((a , b) => a[0] - b[0])
    let count = 0
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            count++
            intervals[i][1] = Math.min(intervals[i - 1][1], intervals[i][1])
        }
    }
    return count
};
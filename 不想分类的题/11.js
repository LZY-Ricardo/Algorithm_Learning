// 11. 盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        // 计算当前面积
        res = Math.max(res, (right - left) * (Math.min(height[left], height[right])))
        // 移动较短的线 把较短的线向中间移动
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return res
};
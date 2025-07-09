// 491. 非递减子序列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 方法1：使用数组偏移去重（处理负数情况）
var findSubsequences = function(nums) { 
    let res = [] // 存储所有符合条件的递增子序列
    let path = [] // 存储当前路径
    
    // 回溯函数
    const backtracking = (startIndex) => {
        // 当路径长度≥2时，保存当前路径到结果
        if (path.length >= 2) {
            res.push([...path])
        }
        
        // 用于记录当前层已使用的数字（通过数组偏移处理负数）
        let used = []
        
        // 遍历数组
        for (let i = startIndex; i < nums.length; i++) {
            // 跳过条件：
            // 1. 当前数字小于路径最后一个数字（不满足递增）
            // 2. 当前数字在当前层已使用过（去重）
            if (path.length > 0 && nums[i] < path[path.length - 1] || used[nums[i] + 100] === 1) continue
            
            path.push(nums[i]) // 加入当前数字到路径
            used[nums[i] + 100] = 1 // 标记当前数字已使用（+100处理负数）
            backtracking(i + 1) // 递归处理下一位置
            path.pop() // 回溯，移除最后添加的数字
        }
    }
    
    backtracking(0) // 从索引0开始回溯
    return res
};

// 方法2：使用Set去重（更直观但需要ES6支持）
var findSubsequences = function(nums) {
    let res = [] // 存储所有符合条件的递增子序列
    let path = [] // 存储当前路径
    
    // 回溯函数
    const backtracking = (startIndex) => {
        // 当路径长度≥2时，保存当前路径到结果
        if (path.length >= 2) {
            res.push([...path])
        }
        
        // 使用Set记录当前层已使用的数字
        let used = new Set()
        
        // 遍历数组
        for (let i = startIndex; i < nums.length; i++) {
            // 跳过条件：
            // 1. 当前数字小于路径最后一个数字（不满足递增）
            // 2. 当前数字在当前层已使用过（去重）
            if (path.length > 0 && nums[i] < path[path.length - 1] || used.has(nums[i])) continue
            
            path.push(nums[i]) // 加入当前数字到路径
            used.add(nums[i]) // 标记当前数字已使用
            backtracking(i + 1) // 递归处理下一位置
            path.pop() // 回溯，移除最后添加的数字
        }
    }
    
    backtracking(0) // 从索引0开始回溯
    return res
};
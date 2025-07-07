// 39. 组合总和
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // 存储结果的数组
    let res = []
    // 存储当前组合的数组
    let path = []
    // 对候选数组进行排序，便于后续处理
    candidates.sort((a, b) => a - b)
    // 存储当前组合的和
    let sum = 0
    
    // 回溯函数，j 表示当前可以选择的起始位置
    const backtracking = (j) => {
        // 基础情况：当前和等于目标值
        if (sum === target) {
            // 将当前组合的副本添加到结果数组
            res.push([...path])
            return
        }
        // 剪枝：当前和已经超过目标值，直接返回
        if (sum > target) {
            return
        }
        
        // 从 j 开始遍历候选数组
        for (let i = j; i < candidates.length; i++) {
            // 添加当前数字到组合
            path.push(candidates[i])
            // 更新当前和
            sum += candidates[i]
            // 递归调用，注意 i 不变，因为可以重复使用同一个数字
            backtracking(i)
            // 回溯：减去当前数字
            sum -= candidates[i]
            // 回溯：从组合中移除当前数字
            path.pop()
        }
    }
    // 调用回溯函数，从索引 0 开始
    backtracking(0)
    // 返回结果
    return res
};


var combinationSum = function(candidates, target) { // 剪枝优化
    let res = []
    let path = []
    candidates.sort((a, b) => a - b)
    let sum = 0
    const backtracking = (j) => {
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = j; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break
            path.push(candidates[i])
            sum += candidates[i]
            backtracking(i)
            sum -= candidates[i]
            path.pop()
        }
    }
    backtracking(0)
    return res
};
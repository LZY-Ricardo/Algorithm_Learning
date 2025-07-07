// 40. 组合总和 II 
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) { // 利用 used 数组进行树层去重
    let res = []
    let path = []
    let used = new Array(candidates.length).fill(false)
    candidates.sort((a, b) => a - b)
    let sum = 0
    const backtracking = (startIndex) => {
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break
            if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) continue
            used[i] = true
            path.push(candidates[i])    
            sum += candidates[i]
            backtracking(i + 1)
            path.pop()
            sum -= candidates[i]
            used[i] = false
        }
    }
    backtracking(0)
    return res
};


var combinationSum2 = function(candidates, target) { // 利用 startIndex 进行树层去重
    let res = []
    let path = []
    candidates.sort((a, b) => a - b)
    let sum = 0
    const backtracking = (startIndex) => {
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break
            if (i > startIndex && candidates[i] === candidates[i - 1]) continue
            path.push(candidates[i])    
            sum += candidates[i]
            backtracking(i + 1)
            path.pop()
            sum -= candidates[i]
        }
    }
    backtracking(0)
    return res
};
// 216. 组合总和 III
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = []
    let path = []
    const backtracking = (sum, startIndex) => {
        const len = path.length
        if (sum === n && len === k) {
            res.push(Array.from(path))
            return
        }
        if (sum > n) return
        for (let i = startIndex; i <= 9 - k + len + 1; i++) {
            path.push(i)
            backtracking(sum + i, i + 1)
            path.pop()
        }
    }
    backtracking(0, 1)
    return res
};
// 77. 组合
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) { // 递归 回溯
    let res = []
    let path = []
    const backtracking = (n, k, startIndex) => {
        if (path.length === k) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i <= n; i++) {
            path.push(i)
            backtracking(n, k, i + 1)
            path.pop()
        }
    }
    backtracking(n, k, 1)
    return res
};

var combine = function(n, k) { // 剪枝优化
    let res = []
    let path = []
    const backtracking = (n, k, startIndex) => {
        const len = path.length
        if (len === k) {
            res.push(path.slice())
            return
        }
        for (let i = startIndex; i <= n - k + len + 1; i++) {
            path.push(i)
            backtracking(n, k, i + 1)
            path.pop()
        }
    }
    backtracking(n, k, 1)
    return res
};
// 46. 全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    let path = []
    let used = new Array(nums.length).fill(false)
    const backtracking = () => {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i-1] === true) continue
            used[i] = true
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
            used[i] = false
        }
    }
    backtracking()
    return res
};


var permute = function(nums) {
    let res = []
    let path = []
    const backtracking = () => {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) continue
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking()
    return res
};
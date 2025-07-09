// 90. 子集 II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b)
    let res = []
    let path = []
    const backtracking = (startIndex) => {
        res.push([...path])
        if (startIndex === nums.length) return
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
};


var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b)
    let res = []
    let path = []
    let used = new Array(nums.length).fill(0)
    const backtracking = (startIndex) => {
        res.push([...path])
        if (startIndex === nums.length) return
        for (let i = startIndex; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === 0) continue
            used[i] = 1
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
            used[i] = 0
        }
    }
    backtracking(0)
    return res
};
// 47. 全排列 II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    let path = []
    nums.sort((a, b) => a - b)
    let used = new Array(nums.length).fill(false)
    const backtracking = () => {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i - 1] && used[i - 1] === false) continue
            if (used[i] == true) continue
            used[i] = true
            path.push(nums[i])
            backtracking()
            path.pop()
            used[i] = false
        }
    }
    backtracking()
    return res
};
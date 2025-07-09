// 78. 子集
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    let path = []
    const backtracking = (startIndex) => {
        res.push([...path])
        if (startIndex === nums.length) return
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
};
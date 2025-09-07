// 46. 全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    let path = []
    let used = new Array(nums.length).fill(false)
    const backTracking = () => {
        if (path.length === nums.length) {
            res.push([...path])
            return 
        }
        for (let i = 0; i < nums.length; i++) {
            // if (path.includes(nums[i])) continue
            if (!used[i]) continue
            used[i] = true
            path.push(nums[i])
            backTracking()
            path.pop()
            used[i]= false
        }
    }
    backTracking()
    return res
};

nums = [1, 2, 3]
console.log(permute(nums));

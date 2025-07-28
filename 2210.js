// 2210. 统计数组中峰和谷的数量
/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    if (nums.length <= 2) return 0 // 峰和谷至少需要三个元素
    let pre = nums[0] // 记录前一个元素
    let res = 0 // 统计峰和谷的数量
    // 从第二个元素开始遍历，到倒数第二个元素结束
    for (let i = 1; i < nums.length - 1; i++) {
        // 如果当前元素与前一个元素相同，跳过
        if (nums[i] === pre) continue
        // 如果当前元素与下一个元素不同
        if (nums[i] !== nums[i + 1]) {
            // 峰：当前元素大于前一个元素且大于下一个元素
            if (nums[i] > pre && nums[i] > nums[i + 1]) {
                res++
            }
            // 谷：当前元素小于前一个元素且小于下一个元素
            if (nums[i] < pre && nums[i] < nums[i + 1]) {
                res++
            }
        } else {
            // 找出下一个不同的元素的索引
            let j = i + 2
            while (j < nums.length && nums[i] === nums[j]) {
                j++
            }
            // 如果下一个不同的元素存在
            if (j < nums.length) {
                // 峰：当前元素大于前一个元素且大于下一个不同的元素
                if (nums[i] > pre && nums[i] > nums[j]) {
                    res++
                }
                // 谷：当前元素小于前一个元素且小于下一个不同的元素
                if (nums[i] < pre && nums[i] < nums[j]) {
                    res++
                }
            }
        }
        // 更新前一个元素为当前元素
        pre = nums[i]
    }
    return res
};
// var minSubArrayLen = function(target, nums) { // 暴力解法 时间复杂度O(n^2)
//     let result = Infinity; // 最终结果
//     let sum = 0; // 子序列的数值之和
//     let subLength = 0; // 子序列的长度
//     for (let i = 0; i < nums.length; i++) { // 子序列的起始位置
//         sum = 0 // 子序列的和每次都要进行重置
//         for (let j = i; j < nums.length; j++) { // 子序列的终止位置
//             sum += nums[j] // 子序列的和
//             if (sum >= target) { // 子序列的和大于等于目标值
//                 subLength =  j - i + 1 // 子序列的长度
//                 result = (result <= subLength) ? result : subLength // 取最小的子序列长度
//                 break // 找到符合条件的子序列，就跳出循环
//             }
//         }
//     }
//     return result === Infinity ? 0 : result; // 如果result没有被赋值，说明没有符合条件的子序列
// };

// var minSubArrayLen = function(target, nums) { // 滑动窗口 时间复杂度O(n)
//     let result = Infinity; // 最终结果
//     let sum = 0; // 子序列的数值之和
//     let subLength = 0; // 子序列的长度
//     let start = 0, end = 0
//     while (end < nums.length) { // 窗口的起始位置
//         sum += nums[end] 
//         while (sum >= target) {
//             subLength = end - start + 1
//             result = Math.min(result, subLength)
//             sum -= nums[start++] // 窗口的起始位置向右移动 
//         }
//         end++
//     }
//     return result === Infinity ? 0 : result; // 如果result没有被赋值，说明没有符合条件的子序列
// };


var minSubArrayLen = function (target, nums) { // 前缀和数组 + 二分查找 时间复杂度O(nlog(n))
    let prefixSum = new Array(nums.length + 1).fill(0)
    prefixSum[0] = nums[0]
    for (let i = 1; i <= nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1] 
    }
    let subLength = Infinity
    for (let i = 0; i < nums.length; i++) {
        let left = i, right = nums.length;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (prefixSum[mid] - prefixSum[i] >= target) {
                subLength = Math.min(subLength, mid - i )
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return subLength === Infinity ? 0 : subLength
    
}
target = 7, nums = [2,3,1,2,4,3] // [0, 2, 5, 6, 8, 12, 15]
console.log(minSubArrayLen(target, nums))

// 15. 三数之和

var threeSum = function(nums) { // 双指针 + 排序
    let res = [] // 结果数组
    nums.sort((a, b) => a - b) // 排序
    for (let i = 0; i < nums.length; i++) { // 遍历数组
        if (nums[i] > 0) return res // 如果当前元素大于0，直接返回
        if (i > 0 && nums[i] === nums[i - 1]) continue // 如果当前元素和前一个元素相同，跳过
         let left = i + 1 // 左指针
         let right = nums.length - 1 // 右指针
         while (left < right) { // 左指针小于右指针
            let sum = nums[i] + nums[left] + nums[right] // 三数之和

            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                res.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] === nums[left + 1]) { // 去重
                    left++
                }
                while(left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            }
         }
    }
    return res
};

nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums));

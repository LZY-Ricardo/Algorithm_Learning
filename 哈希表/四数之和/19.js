// 18. 四数之和

var fourSum = function (nums, target) { 
    let res = []
    let len = nums.length
    if (len < 4) return res
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 3; i++) { 
        if (nums[i] > 0 && nums[i] > target && target > 0) break // 当nums[i] 大于 0 并且大于target 而 target 又大于0的时候 可以进行剪枝
        if (i > 0 && nums[i] === nums[i - 1]) continue // 当i > 0 并且nums[i] === nums[i - 1] 的时候 说明重复了 可以直接跳过 去重
        for (let j = i + 1; j < len - 2; j++) { 
           if (nums[i] + nums[j] > 0 && nums[i] + nums[j] > target && target > 0) break // 剪枝
           if (j > i + 1 && nums[j] === nums[j - 1]) continue // 去重
            let l = j + 1 // 左指针
            let r = len - 1 // 右指针
            while (l < r) { 
                const sum = nums[i] + nums[j] + nums[l] + nums[r]
                if (sum < target) {
                    l++
                } else if (sum > target) {
                    r--
                } else { // 相等的情况 
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    while (l < r && nums[l] === nums[l + 1]) l++ // 去重
                    while (l < r && nums[r] === nums[r - 1]) r-- // 去重
                    l++
                    r--
                }
            }

        }
    }
    return res
};
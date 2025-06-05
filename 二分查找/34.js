var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let res1 = -1,res2 = -1
    while (left <= right){ // 查找第一个 target 的位置
        let mid = left + ((right - left) >> 1)
        if(nums[mid] < target) {
            left = mid + 1
        } else {
            if(nums[mid] === target) {
                res1 = mid
            }
            right = mid - 1
        }
    }
    //重新初始化
    left = 0
    right = nums.length - 1
    while (left <= right){ // 查找最后一个 target 的位置
        let mid = left + ((right - left) >> 1)
        if(nums[mid] > target) {
            right = mid - 1
        } else { 
            if (nums[mid] === target) {
                res2 = mid
            }
            left = mid + 1
        }
    }
    return [res1, res2]
};

//示例测试
let nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums, target)); // 输出: [3,4]

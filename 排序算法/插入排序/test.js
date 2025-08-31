function insertSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        for (let j = i; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
            }
        }
    }
    return nums
}

function insertSort2(nums) {
    // 外循环：已排序区间为 [0, i-1]
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i]
        let j = i - 1
        // 内循环：将 temp 插入到已排序区间 [0, i-1] 中的正确位置
        while (j >=0 && nums[j] > temp) {
            nums[j + 1] = nums[j] // 将 nums[j] 向右移动一位
            j--
        }
        nums[j + 1] = temp // 将 temp 赋值到正确位置
    }
    return nums
}

console.log(insertSort2([5, -5, 6, 1, 1, 6, 45, 2]))

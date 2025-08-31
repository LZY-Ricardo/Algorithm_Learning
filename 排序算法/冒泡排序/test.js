function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
        console.log(nums)
    }
    return nums
}

console.log(bubbleSort([5, -5, 6, 1, 1, 6, 45, 2]))
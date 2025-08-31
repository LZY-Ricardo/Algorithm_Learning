function selectionSort(nums) {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
        }
    }
    return nums
}

console.log(selectionSort([5, -5, 6, 1, 1, 6, 45, 2]))

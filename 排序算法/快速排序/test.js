function partition(nums, left, right) { // 哨兵
    let pivot = nums[left] // 基准值
    let i = left
    let j = right
    while (i < j) {
        while (i < j && nums[j] >= pivot) { // 从右向左找第一个小于 基准数(pivot) 的数
            j--
        }
        while (i < j && nums[i] <= pivot) { // 从左向右找第一个大于 基准数(pivot) 的数
            i++
        }
        if (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]] // 交换
        }
    }
    [nums[left], nums[i]] = [nums[i], nums[left]] // 交换基准值
    return i
}

function partition2(nums, left, right) { // 优化基准数的选择
    const medianThree = (nums, left, mid, right) => {
        let l = nums[left]
        let m = nums[mid]
        let r = nums[right]
        if ((l <= m && l >= r) || (l <= r && l >= m)) {
            return left
        } else if ((m <= l && m >= r) || (m <= r && m >= l)) {
            return mid
        } else {
            return right
        }
    }
    let mid = Math.floor(right - left) / 2
    let pivot = medianThree(nums, left, mid, right)
    [nums[left], nums[pivot]] = [nums[pivot], nums[left]] // 交换基准值
    let l = left
    let r = right
    while (l < r) {
        while (l < r && nums[r] >= pivot) {
            r--
        }
        while (l < r && nums[l] <= pivot) {
            l++
        }
        if (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
        }
    }
    [nums[left], nums[l]] = [nums[l], nums[left]]
    return l
}

function quickSort(nums, left, right) {
    if (left > right) return // 子数组长度为 1 时终止递归
    let pivot = partition(nums, left, right)
    quickSort(nums, left, pivot - 1)
    quickSort(nums, pivot + 1, right)
}

function quickSort2(nums, left, right) { // 递归深度优化
    while (left < right) {
        let pivot = partition(nums, left, right)
        if (pivot - left < right - pivot) {
            quickSort2(nums, left, pivot - 1)
            left = pivot + 1
        } else {
            quickSort2(nums, pivot + 1, right)
            right = pivot - 1
        }
    }
}

let nums = [5, 2, 3, 1]
quickSort2(nums, 0, nums.length - 1)
console.log(nums)
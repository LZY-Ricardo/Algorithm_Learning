function merge(nums, left, mid, right) {
    // 左数组区间为[left, mid]
    // 右数组区间为[mid+1, right]
    let tempArr = new Array(right - left + 1) // 用于存放合并后的临时数组
    let i = left // 左数组的起始索引
    let j = mid + 1 // 右数组的起始索引
    let k = 0 // 临时数组的起始索引

    // 当左右数组都还有元素时，进行比较并放入临时数组
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            tempArr[k++] = nums[i++]
        } else {
            tempArr[k++] = nums[j++]
        }
    }
    // 有一个数组没有元素了，将另一个数组的元素直接放入临时数组
    // 当左数组还有元素时，直接放入临时数组
    while (i <= mid) {
        tempArr[k++] = nums[i++]
    }
    // 当右数组还有元素时，直接放入临时数组
    while (j <= right) {
        tempArr[k++] = nums[j++]
    }
    // 最后将临时数组的元素复制到原数组
    for (k = 0; k < tempArr.length; k++) {
        nums[left + k] = tempArr[k]
    }
}

function mergeSort(nums, left, right) {
    if (left >= right) return // 当子数组长度为1时终止递归
    let mid = Math.floor(left + (right - left) / 2) // 计算中点, 避免溢出
    mergeSort(nums, left, mid) // 递归排序左子数组
    mergeSort(nums, mid + 1, right) // 递归排序右子数组
    merge(nums, left, mid, right) // 合并左右子数组
    return nums
}

console.log(mergeSort([5,2,3,1], 0, 3));

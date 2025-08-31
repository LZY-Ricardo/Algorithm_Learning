function quickSort(nums) { // 分冶快排
    const quickArray = (arr) => {
        if (arr.length <= 1) return arr
        let midIndex = Math.floor(right - left) / 2
        let mid = nums.splice(midIndex, 1)[0]
        let leftArr = []
        let rightArr = []
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < mid) {
                leftArr.push(arr[i])
            } else {
                rightArr.push(arr[i])
            }
        }
        return [...quickArray(leftArr), mid, ...quickArray(rightArr)]
    }
    if (nums.length <= 1) return nums
    return quickArray(nums)
}

console.log(quickSort([5,2,3,1]));

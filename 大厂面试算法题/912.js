// 912. 排序数组
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) { // 快速排序(分治)
    const quickSort = (arr) => {
        if (arr.length < 2) return arr
        let middleIndex = Math.floor(arr.length/2)
        let mid = arr.splice(middleIndex, 1)[0]
        let leftArr = []
        let rightArr = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < mid) {
                leftArr.push(arr[i])
            } else {
                rightArr.push(arr[i])
            }
        }   
        return [...quickSort(leftArr), mid, ...quickSort(rightArr)]
    }
    return quickSort(nums)
};
nums = [5,2,3,1]
console.log(sortArray(nums))


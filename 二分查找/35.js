var searchInsert = function(nums, target) { //左闭右闭
    let left = 0; // 数组左边界
    let right = nums.length - 1; // 数组右边界

    while (left <= right) {
        var middle = left + ((right -left) >> 1); // 数组中间位置
        if (nums[middle] < target) {
            left = middle + 1; // 目标值在右区间，所以[middle + 1, right]
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    //1 3 5 6      2
    //mid left right
    //2   0   3
    //0   0   1    
    //0   1   1
    //0   1   0
    return left;
};

var nums = [1, 3, 5, 6]
console.log(searchInsert(nums, 2))

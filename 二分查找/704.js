var search = function(nums, target) {
    // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
    let mid, left = 0, right = nums.length - 1;
    // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
    while (left <= right) {
        // 位运算 + 防止大数溢出
        mid = left + ((right - left) >> 1);
        // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
        if (nums[mid] > target) {
            right = mid - 1;  // 去左面闭区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1;   // 去右面闭区间寻找
        } else {
            return mid;
        }
    }
    return -1;
};

var search = function(nums, target) { // 区间左闭右开
    let left = 0; // 左边界
    let right = nums.length; // 右边界

    while (left < right) {
        let middle = Math.floor((left + right) / 2); // 中间位置
        if (nums[middle] < target) {
            left = middle + 1; // 左边界右移
        } else if (nums[middle] > target) {
            right = middle; // 右边界左移
        } else return middle; // 找到目标值
    }
    // 未找到目标
    return -1;
}
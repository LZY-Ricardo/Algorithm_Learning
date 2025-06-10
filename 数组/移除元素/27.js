var removeElement = function(nums, val) {
    let fast = 0, slow = 0
    for (fast; fast < nums.length; fast++) {
        if (nums[fast] != val) {
            nums[slow++] = nums[fast]
        }
    }
    return slow
};
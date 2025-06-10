var moveZeroes = function(nums) {
    let fast = 0, slow = 0
    let yuan = nums.length
    for (fast; fast < nums.length; fast++) {
        if (nums[fast] != 0) {
            nums[slow++] = nums[fast]
        }
    }
    for (slow; slow < yuan; slow++){
        nums[slow] = 0;
    }
    return nums
};
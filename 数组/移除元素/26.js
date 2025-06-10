var removeDuplicates = function(nums) {
    let fast = 1, slow = 1
    for (fast; fast < nums.length; fast++) {
        if (nums[fast] != nums [fast - 1]) {
            nums[slow++] = nums[fast]
        }
    }
    return slow
};
console.log(nums = [0,0,1,1,1,2,2,3,3,4])
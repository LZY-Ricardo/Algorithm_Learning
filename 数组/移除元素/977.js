var sortedSquares = function(nums) {
    let res = []
    let left = 0, right = nums.length - 1
    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2){
            res.unshift(nums[left++]**2)
            
        } else {
            res.unshift(nums[right--]**2)
        } 
    }
    return res
};
nums = [-7,-3,2,3,11]
console.log(sortedSquares(nums))
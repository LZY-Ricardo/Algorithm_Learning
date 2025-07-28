// 2044. 统计按位或能得到最大值的子集数目
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    let count = 0;
    
    // 先计算最大按位或值
    for (const num of nums) {
        maxOr |= num;
    }
    
    const backtrack = (start, currentOr) => {
        // 检查当前子集的按位或是否等于最大值
        if (currentOr === maxOr) {
            count++;
        }
        
        // 遍历所有可能的元素组合
        for (let i = start; i < nums.length; i++) {
            // 选择当前元素，更新按位或值
            const newOr = currentOr | nums[i];
            backtrack(i + 1, newOr);
        }
    };
    
    // 从起始位置0和初始OR值0开始回溯
    backtrack(0, 0);
    return count
};

var countMaxOrSubsets = function(nums) {
    let maxOr = 0; // 最大按位或值
    let count = 0; // 最大按位或值的子集数目
    

    const backtrack = (pos, orVal) => {
        // 检查当前子集的按位或是否等于最大值
        if (pos === nums.length) {
            if (orVal === maxOr) {
                count++
            } else if (orVal > maxOr){ // 找到更大的按位或值，更新最大按位或值和子集数目
                maxOr = orVal
                count = 1
            }
            return
        }
        
        // 不选择当前元素
        backtrack(pos + 1, orVal);
        
        // 选择当前元素
        backtrack(pos + 1, orVal | nums[pos]);
    };
    
    // 从起始位置0和初始OR值0开始回溯
    backtrack(0, 0);
    return count
};
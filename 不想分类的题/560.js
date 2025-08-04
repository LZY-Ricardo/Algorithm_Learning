// 560. 和为 K 的子数组
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 方法一：前缀和 + 哈希表优化
    let map = new Map();
    map.set(0, 1); // 初始化：前缀和为0的情况出现1次
    let count = 0;
    let prefixSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        // 如果map中存在prefixSum-k，说明存在区间和为k的子数组
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }
        // 更新prefixSum出现的次数
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    
    return count;
};

var subarraySum = function(nums, k) { // 暴力枚举
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j >= 0; j--) {
            sum += nums[j]
            if (sum === k) count++
        }
    }
    return count;
};

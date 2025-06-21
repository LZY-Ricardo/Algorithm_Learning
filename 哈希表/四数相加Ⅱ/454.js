// 454. 四数相加 II
var fourSumCount = function(nums1, nums2, nums3, nums4) { // 用 map 存储 nums1 和 nums2 中所有元素的和 以及 出现的次数
    let map = new Map()
    let count = 0
    for (let n1 of nums1) {  // 遍历 nums1 和 nums2 数组，统计两个数组元素之和，和出现的次数，放到 map 中
        for (let n2 of nums2) {
            let sum = n1 + n2
            map.set(sum, (map.get(sum) || 0) + 1)
        }
    }
    
    for (let n3 of nums3) { // 遍历 nums3 和 nums4 数组，找到如果 0-(n3+n4) 在map中出现过的话，就用 count 把 map 中 key 对应的 value 也就是出现次数统计出来。
        for (let n4 of nums4) {
            let sum = n3 + n4
            let target = 0 -sum
            if (map.has(target)) {
                count += map.get(target)
            }
        }
    }
    return count
};


// 1.两数之和
var twoSum = function(nums, target) { // 用 map 做哈希表存储已经遍历过的元素 用目标值减去当前值得到所需要的值 去 map 里找是否存在
    let map = new Map() // key 为数组里的元素 value 为下标
    for (let i = 0; i < nums.length; i++) { // 遍历数组
        let item = target - nums[i] // 用目标值减去当前值得到所需要的值
        if (map.has(item)) { // 如果 map 里有这个值 说明之前遍历过这个值 就返回这个值的下标 和 当前的下标
            return [map.get(item), i]
        }
        map.set(nums[i], i)
    }
}
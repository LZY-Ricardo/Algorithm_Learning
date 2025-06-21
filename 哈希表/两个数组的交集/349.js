// 349. 两个数组的交集
var intersection = function(nums1, nums2) { 
    let hash = new Array(1001).fill(0) // 用数组做哈希表 因为题目中说元素大小在0-1000之间
    let result = new Set() // 用set做结果集合 因为题目中说不重复
    for (let i = 0; i < nums1.length; i++) { // 遍历nums1 用哈希表记录出现过的元素
        hash[nums1[i]] = 1
    }
    for (let i = 0; i < nums2.length; i++) {  // 遍历nums2 
        if (hash[nums2[i]] === 1) { // 比对哈希表里的数据 
            result.add(nums2[i]) // 如果存在就加入结果集合
        }
    }
    return [...result] // 最后返回结果集合
};

var intersection = function(nums1, nums2) { // 如果给出的数组数据很大 要使用 set 作为哈希表
    let hash = new Set(nums1) // 用 set 做哈希表
    let result = new Set() // 用 set 做结果集合 有自动去重功能
    for (let i = 0; i < nums2.length; i++) { // 遍历nums2
        if (hash.has(nums2[i])) { // 用 has 方法判断哈希表里是否存在
            result.add(nums2[i]) // 如果存在就加入结果集合
        }
    }
    return Array.from(result) // 最后用 Array.from 方法将结果集合转化为数组
};

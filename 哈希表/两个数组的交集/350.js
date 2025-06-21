// 350. 两个数组的交集 II
// var intersect = function(nums1, nums2) { // 用 map 做哈希表
//     let hashmap = new Map()
//     let result = []
//     // 初始化哈希表
//     for (let i = 0; i < nums1.length; i++) {
//         hashmap.set(nums1[i], (hashmap.get(nums1[i]) || 0) + 1)
//     }
//     console.log(hashmap);
    
//     // 遍历数组2, 哈希表中如果存在 就加入结果数组 哈希表该数对应值减一
//     for (let i = 0; i < nums2.length; i++) {
//         if (hashmap.has(nums2[i]) && hashmap.get(nums2[i]) > 0) {
//             console.log(nums2[i]);
            
//             result.push(nums2[i])
//             hashmap.set(nums2[i], hashmap.get(nums2[i]) - 1)
//         }
//     }
//     return result
// };

var intersect = function(nums1, nums2) { // 排序 + 双指针
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let result = []
    let index1 = 0
    let index2 = 0
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] === nums2[index2]) {
            result.push(nums1[index1])
            index1++
            index2++
        } else if (nums1[index1] < nums2[index2]) index1++
        else  index2++
    }
    return result
};

nums1 = 
[61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]

console.log(intersect(nums1, nums2));

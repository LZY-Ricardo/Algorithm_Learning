function bucketSort(nums) {
    // 初始化 k = n/2 个桶, 预期向每个桶分配 2 个元素
    let k = Math.floor(nums.length / 2)
    let buckets = new Array()
    for (let i = 0; i < k; i++) {
        buckets[i] = []
    }
    // 1. 将数组元素分配到各个桶中
    for (const num of nums) {
        const i = Math.floor(num * k)
        buckets[i].push(num)
    }
    // 2. 对每个桶进行排序
    for (let i = 0; i < k; i++) {
        buckets[i].sort((a, b) => a - b)
    }
    // 3. 合并桶中的元素
    let index = 0
    for (const bucket of buckets) {
        for (let i = 0; i < bucket.length; i++) {
            nums[index++] = bucket[i]
        }
    }
    return nums
}
console.log(bucketSort([0.4, 0.2, 0.3, 0.5, 0.1]));
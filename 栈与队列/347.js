// 347. 前 K 个高频元素

// var topKFrequent = function(nums, k) {
//     let map = new Map()
//     for (let num of nums) {
//         map.set(num, (map.get(num) || 0) + 1)
//     }
//     let arr = Array.from(map)
//     arr.sort((a, b) => b[1] - a[1])

//     let res = []
//     for (let i = 0; i < k; i++) {
//         res.push(arr[i][0])
//     }
//     return res
// };

class Heap {
    // 堆构造函数，接收比较函数
    constructor(compareFn) {
        this.compareFn = compareFn  // 用于比较元素的函数
        this.queue = []  // 用数组实现堆
    }
    
    // 返回堆的大小
    size() {
        return this.queue.length
    }
    
    // 比较堆中两个索引位置的元素
    compare(a, b) {
        if (this.queue[a] === undefined) return 1  // a不存在则b优先
        if (this.queue[b] === undefined) return -1 // b不存在则a优先
        return this.compareFn(this.queue[a], this.queue[b]) // 使用比较函数比较元素
    }

    // 向堆中添加元素
    push(item) {
        this.queue.push(item)
        
        // 上浮操作
        let index = this.size() - 1  // 新元素索引
        let parent = Math.floor((index - 1) / 2)  // 父节点索引
        
        // 如果父节点存在且不符合堆性质，则交换
        while (parent >= 0 && this.compare(parent, index) > 0) {
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]]
            index = parent
            parent = Math.floor((index - 1) / 2)
        } 
    }

    // 弹出堆顶元素
    pop() {
        // 边界情况处理：只有一个元素或空堆
        if (this.size() <= 1) return this.queue.pop()
        
        let out = this.queue[0]  // 保存堆顶元素
        this.queue[0] = this.queue.pop() // 将最后一个元素移到堆顶
        
        // 下沉操作
        let index = 0
        let left = 1  // 左子节点索引
        // 选择较小的子节点
        let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left
        
        // 如果当前节点比子节点大，则交换
        while (this.compare(index, searchChild) > 0) {
            [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]]
            index = searchChild
            left = index * 2 + 1
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left
        }
        return out
    }
}

// 找出数组中出现频率前k高的元素
var topKFrequent = function(nums, k) {
    // 1. 统计每个数字出现的频率
    let map = new Map()
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    // 2. 使用最小堆维护前k高频元素
    // 比较函数：按频率升序排列
    let heap = new Heap((a, b) => a[1] - b[1])
    
    // 遍历频率哈希表
    for (let item of map) {
        heap.push(item)  // 将元素加入堆
        // 如果堆大小超过k，弹出频率最小的元素
        if (heap.size() > k) {
            heap.pop()
        }
    }
    
    // 3. 收集结果
    let res = []
    while (heap.size()) {
        res.push(heap.pop()[0])  // 取出堆中所有元素
    }
    return res
};
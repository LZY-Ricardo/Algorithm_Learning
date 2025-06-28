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
    constructor(compareFn) {
        this.compareFn = compareFn
        this.queue = []
    }
    size() {
        return this.queue.length
    }
    compare(a, b) {
        if (this.queue[a] === undefined) return 1
        if (this.queue[b] === undefined) return -1

        return this.compareFn(this.queue[a], this.queue[b])

    }

    push(item) {
        this.queue.push(item)

        let index = this.size() - 1
        let parent = Math.floor((index - 1) / 2)

        
    }
}

var topKFrequent = function(nums, k) {

};


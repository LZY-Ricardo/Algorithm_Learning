// 239. 滑动窗口最大值

var maxSlidingWindow = function(nums, k) {
    // 双端队列：存储数组索引，维护单调递减序列（队首始终是当前窗口最大值）
    let dequeue = []
    // 结果数组：存储每个窗口的最大值
    let res = []
    
    for (let i = 0; i < nums.length; i++) {
        // 移除窗口外的元素（当队首元素索引超出当前窗口范围时）
        if (dequeue[0] <= i - k) {
            dequeue.shift()
        }
        
        // 维护单调递减队列：移除所有小于当前元素的队列元素
        while (dequeue.length && nums[i] > nums[dequeue[dequeue.length - 1]]) {
            dequeue.pop()
        }
        
        // 将当前元素索引加入队列
        dequeue.push(i)
        
        // 当窗口形成后（i >= k-1），记录当前窗口最大值
        if (i >= k - 1) {
            res.push(nums[dequeue[0]]) // 队首元素即为当前窗口最大值
        }
    }
    
    return res
}
nums = [1,3,-1,-3,5,3,6,7]
k = 3
console.log(maxSlidingWindow(nums, k));

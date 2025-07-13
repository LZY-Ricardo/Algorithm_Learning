// 134. 加油站
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) { // 超时 通不过
    // 计算每个站点的净收益
    const arr = gas.map((item, index) => item - cost[index]);
    let sum = 0;
    let i = 0
    let start = 0;  // 起点
    let count = 0;  // 记录已经遍历的站点数
    let tryCount = 0;  // 记录尝试的起点数
    
    while (tryCount < arr.length) {
        // 累加当前站点的净收益
        sum += arr[i];
        
        // 如果累积净收益小于0，说明当前起点不可行
        if (sum < 0) {
            tryCount++;
            sum = 0;
            i = (start + 1) % arr.length;  // 修正：从下一个站点开始尝试
            start = i;
            count = 0;
            continue;
        }
        
        count++;
        i = (i + 1) % arr.length;  // 修正：使用模运算处理循环
        // 如果已经遍历了整个数组，说明当前起点可行
        if (count === arr.length) {
            return start;
        }
    }
    
    // 如果所有起点都尝试过仍然不可行，则返回-1
    return -1;
}



var canCompleteCircuit = function(gas, cost) {
    // 计算每个站点的净收益
    const arr = gas.map((item, index) => item - cost[index]);
    let start = 0
    let total = arr.reduce((acc, curr) => acc + curr, 0)
    if (total < 0) return -1
    let cur = 0
    for (let i = start; i < arr.length; i++) {
        cur += arr[i]
        if (cur < 0) {
            cur = 0
            start = i + 1
        }
    }
    return start
}
console.log(canCompleteCircuit([6,0,1,3,2], [4,5,2,5,5]));

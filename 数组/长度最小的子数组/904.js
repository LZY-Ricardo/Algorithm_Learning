// 定义 totalFruit 函数，接收一个水果数组作为参数
var totalFruit = function(fruits) {
    // 初始化滑动窗口的左指针，从数组的起始位置开始
    let begin = 0;
    // 初始化滑动窗口的右指针，从数组的起始位置开始
    let end = 0;
    // 创建一个 Map 对象，用于存储每种水果类型及其出现的次数
    let map = new Map();
    // 初始化结果变量，用于记录最大的采摘水果数量，初始值为 0
    let res = 0;
    // 当右指针未超出数组范围时，继续循环
    while (end < fruits.length) {
        // 将当前右指针指向的水果类型添加到 Map 中，并更新其出现次数
        map.set(fruits[end], (map.get(fruits[end]) || 0) + 1);
        // 当 Map 中存储的水果类型超过 2 种时，需要缩小窗口
        while (map.size > 2) {
            // 减少左指针指向的水果类型的出现次数
            map.set(fruits[begin], map.get(fruits[begin]) - 1);
            // 如果该水果类型的出现次数变为 0，则从 Map 中删除该水果类型
            if (map.get(fruits[begin]) === 0) {
                map.delete(fruits[begin]);
            }
            // 左指针右移，缩小窗口
            begin++;
        }
        // 更新最大采摘水果数量，取当前窗口大小和之前记录的最大值中的较大值
        res = Math.max(res, end - begin + 1);
        // 右指针右移，扩大窗口
        end++;
    }
    // 返回最大采摘水果数量
    return res;
};
// 定义一个测试用的水果数组
fruits = [3,3,3,1,2,1,1,2,3,3,4]
// 调用 totalFruit 函数并打印结果
console.log(totalFruit(fruits))
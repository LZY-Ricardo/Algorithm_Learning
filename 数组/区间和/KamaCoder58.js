// 58. 区间和（第九期模拟笔试）
// 题目描述
// 给定一个整数数组 Array，请计算该数组在每个指定区间内元素的总和。
// 输入描述
// 第一行输入为整数数组 Array 的长度 n，接下来 n 行，每行一个整数，表示数组的元素。随后的输入为需要计算总和的区间下标：a，b （b > = a），直至文件结束。
// 输出描述
// 输出每个指定区间内元素的总和。
// 输入示例
// 5
// 1
// 2
// 3
// 4
// 5
// 0 1
// 1 3
// 输出示例
// 3
// 9
// 提示信息
// 数据范围：
// 0 < n <= 100000

function prefixSum() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let inputLines = [];
    rl.on('line', (line) => {
        inputLines.push(line.trim());
    });

    rl.on('close', () => {
        // 读取项数 n
        const n = parseInt(inputLines[0]);

        // 使用前缀和，复杂度控制在 O(1)
        let sum = new Array(n);
        sum[0] = parseInt(inputLines[1]);

        // 计算前缀和数组
        for (let i = 1; i < n; i++) {
            let value = parseInt(inputLines[i + 1]);
            sum[i] = sum[i - 1] + value;
        }

        // 处理区间和查询
        for (let i = n + 1; i < inputLines.length; i++) {
            let [left, right] = inputLines[i].split(' ').map(Number);

            if (left === 0) {
                console.log(sum[right]);
            } else {
                console.log(sum[right] - sum[left - 1]);
            }
        }
    });
}
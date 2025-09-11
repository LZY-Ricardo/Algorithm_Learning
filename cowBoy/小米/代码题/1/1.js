const r1 = require('readline').createInterface({ input: process.stdin })
var iter = r1[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

(async () => {
    let input = []
    while ((line = await readline())) {
        input.push(line.split(' ').map(Number))
    }
    const [n, k, a, b] = input[0]
    const ability = input[1]
    const cooperation = input[2]

    // 计算首次滑动窗口的值
    let abilitySum = 0
    let cooperationSum = 0
    for (let i = 0; i < k; i++) {
        abilitySum += ability[i]
        cooperationSum += cooperation[i]
    }
    let res = 0
    if (abilitySum >= a && cooperationSum >= b) {
        res++
    }
    // 滑动窗口
    for (let i = k; i < n; i++) {
        abilitySum = abilitySum - ability[i - k] + ability[i]
        cooperationSum = cooperationSum - cooperation[i - k] + cooperation[i]
        if (abilitySum >= a && cooperationSum >= b) {
            res++
        }
    }
    r1.close()
})()

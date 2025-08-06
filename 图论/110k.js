// 110. 字符串接龙
const r1 = require('readline').createInterface({ input: process.stdin})
let iter = r1[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

let N // 输入字符串个数
let beginStr // 开始字符串
let endStr // 结束字符串
let strList = new Set() // 字符串列表
let visitedMap = new Map() // 访问过的字符串

// 读取输入 初始化地图
const initGraph = async () => {
    let line = await readline();
    N = Number(line)
    line = await readline();
    [beginStr, endStr] = line.split(' ')
    for (let i = 0; i < N; i++) {
        line = await readline()
        strList.add(line.trim())
    }
}

(async function() {
    await initGraph()
    let queue = []
    queue.push(beginStr)
    visitedMap.set(beginStr, 1)
    while (queue.length) {
        let curStr = queue.shift()
        for (let i = 0; i < curStr.length; i++) {
            let curArr = curStr.split('')
            for (let j = 0; j < 26; j++) {
                // 将当前字符替换为其他字符
                curArr[i] = String.fromCharCode('a'.charCodeAt(0) + j)
                // 转换为新字符串
                let newStr = curArr.join('')
                // 跳过与当前字符串相同的情况（即替换后字符与原字符相同）
                if (newStr === curStr) continue;
                
                // 新字符串是目标字符串
                if (newStr === endStr) {
                    console.log(visitedMap.get(curStr) + 1);
                    return 
                }
                // 如果该新字符串是字典里面的 且还没被访问过 就加入访问列表写入当前路径长度 并加入队列
                if (strList.has(newStr) && !visitedMap.has(newStr)) {
                    visitedMap.set(newStr, visitedMap.get(curStr) + 1)
                    queue.push(newStr)
                }
            }
        }
    }
    console.log(0);
})()



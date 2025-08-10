// 108. 冗余的边
const r1 = require('readline').createInterface({ input: process.stdin });
// 创建readline接口
let iter = r1[Symbol.asyncIterator]();
// 创建异步迭代器
const readline = async () => (await iter.next()).value;


let N 
let parent = []

const init = () => {
    for (let i = 1; i <= N; i++) {
        parent[i] = i
    }
}

const find = (x) => {
    if (parent[x] === x) return x
    return parent[x] = find(parent[x])
}

const join = (u, v) => {
    const rootU = find(u)
    const rootV = find(v)
    if (rootU === rootV) return false
    parent[rootU] = rootV
    return true
}

(async function () {
    let line = await readline()
    N = Number(line)
    
    init()
    let edges = []  
    for (let i = 1; i <= N; i++) {
        line = await readline()
        edges.push(line.split(' ').map(Number))
    }
    for (const [u, v] of edges) {
        if (!join(u, v)) {
            console.log(u, v);
            return
        }
    }
})()

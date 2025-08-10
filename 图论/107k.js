// 107. 寻找存在的路径
const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let iter = r1[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
let N, M, source, destination
let edges = []
let parent = []
// 并查集初始化
const init = () => {
    for (let i = 1; i <= N; i++) {
        parent[i] = i
    }
}
// 并查集里寻根的过程
const find = (x) => {
    return x === parent[x] ? x : find(parent[x])
}
// 将 v->u 这条边加入并查集
const join = (u, v) => {
    let rootU = find(u)
    let rootV = find(v)
    if (rootU === rootV) return
    parent[rootU] = rootV
}
// 判断 u 和 v 是否找到同一个根
const isSame = (u, v) => {
    return find(u) === find(v)
}

(async function () {
    let line = await readline();
    [N, M] = line.split(' ').map(Number)
    init()
    for (let i = 0; i < M; i++) {
        line = await readline()
        let [u, v] = line.split(' ').map(Number)
        join(u, v)
    }
    line = await readline();
    [source, destination] = line.split(' ').map(Number)
    if (isSame(source, destination)) {
        console.log(1);
    } else {
        console.log(0);
    }
    r1.close()
})()
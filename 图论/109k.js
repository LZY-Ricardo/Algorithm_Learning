// 109. 冗余的边II
const r1 = require('readline').createInterface({ input: process.stdin });
// 创建readline接口
let iter = r1[Symbol.asyncIterator]();
// 创建异步迭代器
const readline = async () => (await iter.next()).value;

let N // 节点数和边数
let parent = []
let edges = []
let inDegree = []

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
    if (rootU === rootV) return 
    parent[rootU] = rootV
}

const isSame = (u, v) => {
    return find(u) === find(v)
}

// 检查删除边后的图是否是树
const isTreeAfterRemoveEdge = (edges, edge) => {
    init()
    for (const [u, v] of edges) {
        // 跳过要删除的边
        if (u === edge[0] && v === edge[1]) continue
        
        // 如果已经在同一个集合中，说明形成了环
        if (isSame(u, v)) return false
        
        join(u, v)
    }
    return true
}

// 在有向图中找到要删除的那条边, 使环成为树
const getRemoveEdge = (edges) => {
    init()
    for (const [u, v] of edges) {
        if (isSame(u, v)){
            console.log(u, v);
            return       
        } else {
            join(u, v)
        }
    }
}

(async function () {
    let line = await readline()
    N = Number(line)
    init()
    // 读取边信息 统计每个节点的入读
    inDegree = new Array(N + 1).fill(0)

    for (let i = 1; i <= N; i++) {
        line = await readline()
        line = line.split(' ').map(Number)
        edges.push(line)
        inDegree[line[1]]++
    }
    // 找到入度为 2 的节点
    // 记录那个节点的两条入边
    let vec = []
    for (let i = 0; i < edges.length; i++) {
        if (inDegree[edges[i][1]] === 2) {
            vec.push(edges[i])
        }
    }

    // 情况一和情况二
    if (vec.length > 0) {
        if (isTreeAfterRemoveEdge(edges, vec[1])) {
            console.log(vec[1][0], vec[1][1]);  // 情况一
        } else {
            console.log(vec[0][0], vec[0][1]);  // 情况二
        }
        return 
    }

    // 情况三
    // 没有入度为2的情况下, 那么一定有有向环, 找到构成环的那条边就可以了
    getRemoveEdge(edges)
})()

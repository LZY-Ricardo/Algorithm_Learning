// 105. 有向图的完全联通
const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputlines = []
r1.on('line', (line) => {
    inputlines.push(line)
})

r1.on('close', () => {
    let [n, edgesCount] = inputlines[0].split(' ').map(Number)

    let graph = Array.from({length: n + 1}, () => {return []})

    // 用邻接表存储图
    for (let i = 1; i <= edgesCount; i++) {
        let [u, v] = inputlines[i].split(' ').map(Number)
        graph[u].push(v)
    }

    let visited = new Array(n + 1).fill(false)
    
    const dfs = (graph, key, visited) => {
        if (visited[key]) return
        visited[key] = true
        for (let nextKey of graph[key]) {
            dfs(graph, nextKey, visited)
        }
    }

    const bfs = (graph, key, visited) => {
        let queue = []
        queue.push(key)
        while(queue.length) {
            let cur = queue.shift()
            if (visited[cur]) continue
            visited[cur] = true
            for (let nextKey of graph[cur]) {
                if (!visited[nextKey]) {
                    queue.push(nextKey)
                }
            }
        }
    }

    bfs(graph, 1, visited)

    visited[0] = true
    // 检查是否所有节点都被访问到
    let res = visited.every(item => item === true)

    if (res) {
        console.log(1);
    } else {
        console.log(-1);       
    }
})

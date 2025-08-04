// 102. 沉没孤岛
const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let iter = r1[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value
let graph // 地图
let N, M
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]

// 读取输入 初始化地图
const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(item => Number(item))
    graph = new Array(N).fill().map(() => new Array(M).fill(0))
    for (let i = 0; i < N; i++) {
        line = await readline()
        line = line.split(' ').map(item => Number(item))
        for (let j = 0; j < M; j++) {
            graph[i][j] = line[j]
        }
    }
}

(async function () {
    await initGraph()
    for (let i = 0; i < N; i++) {
        if (graph[i][0] === 1) bfs(graph, i, 0)
        if (graph[i][M - 1] === 1) bfs(graph, i, M - 1)
    }
    for (let j = 0; j < M; j++) {
        if (graph[0][j] === 1) bfs(graph, 0, j) 
        if (graph[N - 1][j] === 1) bfs(graph, N - 1, j)
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j< M; j++) {
            if (graph[i][j] !== 0) graph[i][j]--
        }
    }
    for (let item of graph) {
        console.log(item.join(' '))
    }
})()

// 深搜
const dfs = (graph, x, y) => {
    if (graph[x][y] === 0) return
    graph[x][y] = 2
    for (let i = 0; i < 4; i++) {
        let nx = x + dir[i][0]
        let ny = y + dir[i][1]
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
        if (graph[nx][ny] === 1) {
            dfs(graph, nx, ny)
        }
    }
}

// 广搜
const bfs = (graph, x, y) => {
    let queue = []
    graph[x][y] = 2
    queue.push([x, y])
    while (queue.length) {
        let cur = queue.shift()
        for (let i = 0; i < 4; i++) {
            let nx = cur[0] + dir[i][0]
            let ny = cur[1] + dir[i][1]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if (graph[nx][ny] === 1) {
                graph[nx][ny] = 2
                queue.push([nx, ny])
            }
        }
    }
}
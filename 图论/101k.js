// 101. 孤岛的总面积
const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let iter = r1[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value

let graph 
let N, M
let res = 0
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]

// 读取输入, 初始化地图
const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(item => +item)
    graph = new Array(N).fill().map(() => new Array(M).fill(0))
    for (let i = 0; i < N; i++) {
        line = await readline()
        line = line.split(' ').map(item => +item)
        for (let j = 0; j < M; j++) {
            graph[i][j] = line[j]
        }
    }
}
// const dfs = (graph, x, y) => {
//     if (graph[x][y] === 0) return
//     graph[x][y] = 0
//     for (let i = 0; i < 4; i++) {
//         let nx = x + dir[i][0]
//         let ny = y + dir[i][1]
//         if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
//         if (graph[nx][ny] === 1) {
//             dfs(graph, nx, ny)
//         }
//     }
// }
const bfs = (graph, x, y) => {
    let queue = []
    graph[x][y] = 0
    queue.push([x, y])
    while (queue.length) {
        let cur = queue.shift()
        for (let i = 0; i < 4; i++) {
            let nx = cur[0] + dir[i][0]
            let ny = cur[1] + dir[i][1]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if (graph[nx][ny] === 1) {
                graph[nx][ny] = 0
                queue.push([nx, ny])
            }
        }
    }
}
(async function() {
    await initGraph()
    for (let i = 0; i < N; i++) {
        // if (graph[i][0] === 1) dfs(graph, i, 0)
        // if (graph[i][M - 1] === 1) dfs(graph, i, M - 1)
        if (graph[i][0] === 1) bfs(graph, i, 0)
        if (graph[i][M - 1] === 1) bfs(graph, i, M - 1)
    }
    for (let j = 0; j < M; j++) {
        // if (graph[0][j] === 1) dfs(graph, 0, j)
        // if (graph[N - 1][j] === 1) dfs(graph, N - 1, j)
        if (graph[0][j] === 1) bfs(graph, 0, j)
        if (graph[N - 1][j] === 1) bfs(graph, N - 1, j)
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 1) {
                res++
            }
        }
    }
    console.log(res)
})()

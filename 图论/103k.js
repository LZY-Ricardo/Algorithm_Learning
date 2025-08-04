// 103. 水流问题
const r1 = require('readline').createInterface({input: process.stdin})
let iter = r1[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

let graph = []
let N, M
const dir = [[0, 1], [1, 0], [0, - 1], [-1, 0]]

const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(i => +i)
    for (let i = 0; i < N; i++) {
        line = await readline()
        graph.push(line.split(' ').map(i => +i))
    }
}

const dfs = (graph, visited, x, y) => {
    if (visited[x][y]) return
    visited[x][y] = true
    for (let i = 0; i < 4; i++) {
        let nx = x + dir[i][0]
        let ny = y + dir[i][1]
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
        if (graph[nx][ny] >= graph[x][y]) {
            dfs(graph, visited, nx, ny)
        }
    }
}

const bfs = (graph, visited, x, y) => {
    if (visited[x][y]) return
    let queue = []
    queue.push([x, y])
    visited[x][y] = true
    while (queue.length) {
        let [cx, cy] = queue.shift()
        for (let i = 0; i < 4; i++) {
            let nx = cx + dir[i][0]
            let ny = cy + dir[i][1]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if (graph[nx][ny] >= graph[cx][cy] && !visited[nx][ny]) {
                queue.push([nx, ny])
                visited[nx][ny] = true
            }
        }
    }
}

(async function() {
    await initGraph()
    let vx = new Array(N).fill().map(() => new Array(M).fill(false))
    let vy = new Array(N).fill().map(() => new Array(M).fill(false))
    for (let i = 0; i < N; i++) {
        bfs(graph, vx, i, 0)
        bfs(graph, vy, i, M - 1)
    }
    for (let j = 0; j < M; j++) {
        bfs(graph, vx, 0, j)
        bfs(graph, vy, N - 1, j)
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (vx[i][j] && vy[i][j]) {
                console.log(i, j)
            }
        }
    }
})()
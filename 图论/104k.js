// 104. 建造最大岛屿
const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let iter = r1[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

let graph = [] 
let N, M
let result = 0
let count = 0 // 统计岛屿面积
const dir = [[0, 1], [1, 0], [0, - 1], [-1, 0]]

const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(Number)
    for (let i = 0; i < N; i++) {
        line = await readline()
        graph.push(line.split(' ').map(Number))
    }
}
// 计算岛屿面积
const dfs = (graph, visited, x, y, mark) => {
    if (graph[x][y] === 0 || visited[x][y]) return 
    count++
    visited[x][y] = true
    graph[x][y] = mark
    for (let i = 0; i < 4; i++) {
        let nx = x + dir[i][0]
        let ny = y + dir[i][1]
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
        dfs(graph, visited, nx, ny, mark)
    }
}

const bfs = (graph, visited, x, y, mark) => {
    let queue = []
    queue.push([x, y])
    visited[x][y] = true
    let area = 1
    graph[x][y] = mark
    while (queue.length) {
        let [cx, cy] = queue.shift()
        for (let i = 0; i < 4; i++) {
            let nx = cx + dir[i][0]
            let ny = cy + dir[i][1]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if (graph[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push([nx, ny])
                visited[nx][ny] = true
                area++
                graph[nx][ny] = mark
            }
        }
    }
    return area
}

(async function() {
    await initGraph()
    // 遍历图，将每个岛屿标记为不同的数字 同时记录每个岛屿的面积
    let mark = 2
    let visited = new Array(N).fill().map(() => new Array(M).fill(false))
    // 记录每个岛屿的面积
    let map = new Map()
    // 统计图中是否全是陆地
    let isAllLand = true
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] == 0 && isAllLand) isAllLand = false
            if (graph[i][j] === 1 && !visited[i][j]) {
                // count = 0
                let area = bfs(graph, visited, i, j, mark)
                // 给当前岛屿编号同时记录它的面积
                map.set(mark, area)
                mark++
            }
        }
    }
    // 整片地图都是陆地
    if (isAllLand) {
        console.log(N * M)
        return
    }
    // 遍历图, 尝试将每个海洋改成陆地 计算最大面积
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // 统计当前海洋周围的岛屿面积 避免重复访问
            let set = new Set()
            // 统计当前海洋周围的岛屿面积
            count = 1
            if (graph[i][j] === 0) {
                for (let k = 0; k < 4; k++) {
                    let nx = i + dir[k][0]
                    let ny = j + dir[k][1]
                    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
                    if (graph[nx][ny] !== 0 && !set.has(graph[nx][ny])) {
                        count += map.get(graph[nx][ny])
                        set.add(graph[nx][ny])
                    }
                }
            }
            result = Math.max(result, count)
        }
    }
    console.log(result)
})()

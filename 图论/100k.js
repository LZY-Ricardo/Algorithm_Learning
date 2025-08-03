// 100. 岛屿的最大面积

// const { triggerAsyncId } = require('async_hooks')

// // 深搜
// const r1 = require('readline').createInterface({ input: process.stdin })
// let iter = r1[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// let graph // 地图
// let n, m // 地图大小
// let visited // 访问过的节点
// let res = 0 // 最大岛屿的面积
// let count = 0 // 岛屿内节点数
// const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]] // 四个方向

// // 读取输入, 初始化地图
// const initGraph = async () => {
//     let line = await readline();
//     [n, m] = line.split(' ').map(item => +item);
//     graph = new Array(n).fill().map(() => new Array(m).fill(0))
//     visited = new Array(n).fill().map(() => new Array(m).fill(false))
//     for (let i = 0; i < n; i++) {
//         line = await readline()
//         line = line.split(' ').map(item => +item)
//         for (let j = 0; j < m; j++) {
//             graph[i][j] = line[j]
//         }
//     }
// }
// // 版本一
// // const dfs = (graph, visited, x, y) => {
// //     if (visited[x][y] || graph[x][y] === 0) return
// //     count++
// //     visited[x][y] = true

// //     for (let i = 0; i < 4; i++) {
// //         let nx = x + dir[i][0]
// //         let ny = y + dir[i][1]
// //         if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
// //             dfs(graph, visited, nx, ny)
// //         }
// //     }
// // }
// // 版本二
// const dfs = (graph, visited, x, y) => {
//     for (let i = 0; i < 4; i++) {
//         let nx = x + dir[i][0]
//         let ny = y + dir[i][1]
//         if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue
//         if (!visited[nx][ny] && graph[nx][ny] === 1) {
//             count++
//             visited[nx][ny] = true
//             dfs(graph, visited, nx, ny)
//         }
//     }
// }
// (async function () {
//     await initGraph()
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (graph[i][j] === 1 && !visited[i][j]) {
//                 // 版本一
//                 // count = 0
//                 // dfs(graph, visited, i, j)
//                 // res = Math.max(res, count)
//                 // 版本二
//                 count = 1
//                 visited[i][j] = true
//                 dfs(graph, visited, i, j)
//                 res = Math.max(res, count)
//             }
//         }
//     }
//     console.log(res)
// })()




// 广搜
const r1 = require('readline').createInterface({ input: process.stdin });
// 创建readline接口
let iter = r1[Symbol.asyncIterator]();
// 创建异步迭代器
const readline = async () => (await iter.next()).value;

let graph // 地图
let N, M // 地图大小
let visited // 访问过的节点
let result = 0 // 最大岛屿面积
let count = 0 // 岛屿内节点数
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]] //方向

// 读取输入, 初始化地图
const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(item => +item);
    graph = new Array(N).fill().map(() => new Array(M).fill(0))
    visited = new Array(N).fill().map(() => new Array(M).fill(false))
    for (let i = 0; i < N; i++) {
        line = await readline()
        line = line.split(' ').map(item => +item)
        for (let j = 0; j < M; j++) {
            graph[i][j] = line[j]
        }
    }
}
const bfs = (graph, visited, x, y) => {
    let queue = []
    count = 1
    visited[x][y] = true
    queue.push([x, y])
    while (queue.length) {
        let cur = queue.shift()
        for (let i = 0; i < 4; i++) {
            let nx = cur[0] + dir[i][0]
            let ny = cur[1] + dir[i][1]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if (!visited[nx][ny] && graph[nx][ny] === 1) {
                queue.push([nx, ny])
                visited[nx][ny] = true
                count++
            }
        }
    }
}
(async function() {
    await initGraph()
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 1 && !visited[i][j]) {
                bfs(graph, visited, i, j)
                result = Math.max(result, count)
            }
        }
    }
    console.log(result)
})()



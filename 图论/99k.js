// 99. 岛屿数量
const r1 = require('readline').createInterface({input:process.stdin});
// 创建 readline 接口
let iter = r1[Symbol.asyncIterator]();
// 创建异步迭代器
const readline = async () => {
    return (
        (await iter.next()).value
    )
}

let graph // 地图
let N, M 
let visited // 标记访问过的节点，不要重复访问
let result = 0 // 岛屿数量
const dir = [[0,1],[1, 0],[-1, 0],[0, -1]] // 四个方向

// 读取输入, 初始化地图
const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(item => +item)
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
/**
 * @description: 从节点x,y开始深度优先遍历
 * @param {*} graph 是地图，也就是一个二维数组
 * @param {*} visited 标记访问过的节点，不要重复访问
 * @param {*} x 表示开始搜索节点的下标
 * @param {*} y 表示开始搜索节点的下标
 * @return {*}
 */
const dfs = (graph, visited, x, y) => { // 深度优先遍历 将终止条件写在检查节点的判断中
    for (let i = 0; i < 4; i++) { // 四个方向
        let nx = dir[i][0] + x // 下一个节点的x坐标
        let ny = dir[i][1] + y // 下一个节点的y坐标
        // 检查下一个节点是否越界
        if (nx >= 0 && nx <= N - 1 && ny >= 0 && ny <= M - 1) {
            // 检查下一个节点是否是陆地并且没有访问过
            if (graph[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true // 标记为已访问
                dfs(graph, visited, nx, ny) // 递归搜索
            }
        }
    }
}
(async function () {
    // 读取输入, 初始化地图
    await initGraph()

    // 统计岛屿数
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 1 && !visited[i][j]) {
                visited[i][j] = true
                result++
                dfs(graph, visited, i, j)
            }
        } 
    }

    console.log(result);
})()

/**
 * @description: 从(x, y)开始广度优先遍历
 * @param {*} graph 地图
 * @param {*} visited 访问过的节点
 * @param {*} x 开始搜索节点的下标
 * @param {*} y 开始搜索节点的下标
 * @return {*}
 */
const bfs = (graph, visited, x, y) => {
    let queue = []
    queue.push([x, y])
    visited[x][y] = true
    while (queue.length) {
        let [cx, cy] = queue.shift()
        for (let i = 0; i < 4; i++) {
            let nx = cx + dir[i][0]
            let ny = cy + dir[i][1]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if (graph[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push([nx, ny])
                visited[nx][ny] = true
            }
        }
    }
}
(async function () {
    await initGraph()

    for (let i = 0; i < N; i++) {
        for (let j = 0; j< M; j++) {
            if (graph[i][j] === 1 && !visited[i][j]) {
                result++
                bfs(graph, visited, i, j)
            }
        }
    }

    console.log(result);
})()
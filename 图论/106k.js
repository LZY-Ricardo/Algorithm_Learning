// 106. 岛屿的周长
const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let iter = r1[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

let graph = []
let N, M
let result = 0
const dir = [[0, 1], [1, 0], [0, - 1], [-1, 0]]

const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(Number)
    for (let i = 0; i < N; i++) {
        line = await readline()
        graph.push(line.split(' ').map(Number))
    }
}

(async function() {
    await initGraph()
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 1) {
                for (let k = 0; k < 4; k++) {
                    let nx = i + dir[k][0]
                    let ny = j + dir[k][1]
                    // 边界情况 或者 是水 都算周长
                    if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
                        result++
                    } else if (graph[nx][ny] === 0) {
                        result++
                    }
                }
            }
        }
    }
    console.log(result)
})()





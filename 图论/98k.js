// 98. 所有可达路径
// // 创建readline接口
// const r1 = require('readline').createInterface({input:process.stdin})
// // 创建异步迭代器
// let iter = r1[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

const { log } = require('console');

// let graph
// let N, M
// // 收集符合条件的路径
// let result = []
// // 从节点1到终点的路径
// let path = []

// // 创建邻接矩阵, 初始化邻接矩阵
// async function initGraph() {
//     let line

//     line = await readline();
//     [N, M] = line.split(' ').map(i => parseInt(i))
//     graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(0))

//     while (M--) {
//         line = await readline();
//         const strArr = line ? line.split(' ').map(i => parseInt(i)) : undefined
//         strArr ? graph[strArr[0]][strArr[1]] = 1 : null
//     }
// }

// // dfs
// const dfs = (graph, cur, target) => {
//     if (cur === target) {
//         result.push([...path])
//         return
//     }
//     for (let i = 1; i <= N; i++) {
//         if (graph[cur][i] === 1) {
//             path.push(i)
//             dfs(graph, i, target)
//             path.pop()
//         }
//     }
// }

// (async function(){
//     // 创建邻接矩阵, 初始化邻接矩阵
//     await initGraph()
    
//     // 从节点1开始搜索所有路径
//     path.push(1)
//     dfs(graph, 1, N)

//     // 输出
//     if (result.length > 0) {
//         result.forEach(item => {
//             console.log(item.join(' '));
//         })
//     } else {
//         console.log(-1);
//     }

// })()


// 邻接表 
const r1 = require('readline').createInterface({ input: process.stdin });
// 创建readline接口
let iter = r1[Symbol.asyncIterator]();
// 创建异步迭代器
const readline = async () => (await iter.next()).value;

let graph;
let N, M;

// 收集符合条件的路径
let result = [];
// 1节点到终点的路径
let path = [];

// 创建邻接表，初始化邻接表
async function initGraph() {
  let line;
  line = await readline();
  [N, M] = line.split(' ').map(i => parseInt(i))
  graph = new Array(N + 1).fill(0).map(() => new Array())

  while (line = await readline()) {
    const strArr = line.split(' ').map(i => parseInt(i))
    strArr ? graph[strArr[0]].push(strArr[1]) : null
  }
};

// dfs
const dfs = (graph, cur, target) => {
    if (cur === target) {
        result.push([...path])
        return
    }
    for (const item of graph[cur]) {
        path.push(item)
        dfs(graph, item, target)
        path.pop()
    }
}

(async function(){
    await initGraph()

    path.push(1)
    dfs(graph, 1, N)

    if (result.length > 0) {
        result.forEach(item => {
            console.log(item.join(' '))
        })
    } else {
        console.log(-1);
        
    }
})()
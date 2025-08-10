// 1971. 寻找图中是否存在路径
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) { // BFS
    const graph = new Array(n).fill().map(() => new Array())
    for (const edge of edges) {
        const x = edge[0]
        const y = edge[1]
        graph[x].push(y)
        graph[y].push(x)
    }
    const visited = new Array(n).fill(false)
    const queue = [source]
    visited[source] = true
    while(queue.length) {
        const cur = queue.shift()
        if (cur === destination) break
        for (const next of graph[cur]) {
            if (!visited[next]) {
                queue.push(next)
                visited[next] = true
            }
        }
    }
    return visited[destination]
};


var validPath = function(n, edges, source, destination) { // DFS
    const graph = new Array(n).fill().map(() => new Array())
    for (const edge of edges) {
        const x = edge[0]
        const y = edge[1]
        graph[x].push(y)
        graph[y].push(x)
    }
    const visited = new Array(n).fill(false)
    const dfs = (key) => {
        if (key === destination) return true
        for (const next of graph[key]) {
            if (!visited[next]) {
                visited[next] = true
                if (dfs(next)) return true
            }

        }
        return false
    }
    return dfs(source)
};


var validPath = function(n, edges, source, destination) { // 并查集
    // 初始化并查集
    const init = () => {
        for (let i = 0; i < n; i++) {
            parent[i] = i
        }
    }
    // 查找x的根节点
    const find = (x) => {
        if (parent[x] === x) return x
        parent[x] = find(parent[x])
        return parent[x]
    } 
    // 合并u和v
    const join = (u, v) => {
        const rootU = find(u)
        const rootV = find(v)
        if (rootU === rootV) return
        parent[rootU] = rootV
    }
    // 判断u和v是否在同一个集合
    const isSame = (u, v) => {
        return find(u) === find(v)
    }
    let parent = []
    init()
    for (const edge of edges) {
        join(edge[0], edge[1])
    }
    return isSame(source, destination)
};


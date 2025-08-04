// 200. 岛屿数量
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    grid = grid.map(item => item.map(i => +i))
    let count = 0
    const N = grid.length
    const M = grid[0].length
    // 可以不用visited数组，直接修改grid将访问到的陆地节点全部改为2 表示已经访问过
    let visited = new Array(N).fill().map(() => new Array(M).fill(false))
    const dir = [[0, 1], [1, 0], [0, - 1], [-1, 0]]
    const dfs = (grid, x, y) => {
        if (visited[x][y] || grid[x][y] === 0) return 
        visited[x][y] = true
        for (let i = 0; i < 4; i++) {
            let nx = x + dir[i][0]
            let ny = y + dir[i][1]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            dfs(grid, nx, ny)
        }
    }
    const bfs = (grid, x, y) => {
        let queue = []
        visited[x][y] = true
        queue.push([x, y])
        while (queue.length) {
            let [cx, cy] = queue.shift()
            for (let i = 0; i < 4; i++) {
                let nx = cx + dir[i][0]
                let ny = cy + dir[i][1]
                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
                if (grid[nx][ny] === 1 && !visited[nx][ny]) {
                    queue.push([nx, ny])
                    visited[nx][ny] = true
                }
            }
        }
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                count++
                bfs(grid, i, j)
            }
        }
    }
    return count
};
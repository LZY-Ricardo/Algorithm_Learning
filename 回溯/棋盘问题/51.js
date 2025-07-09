// 51. N 皇后问题
/**
 * 解决N皇后问题，找出所有可能的放置方案
 * @param {number} n - 皇后数量和棋盘大小
 * @return {string[][]} - 包含所有有效放置方案的数组
 */
var solveNQueens = function(n) {
    let res = []; // 存储所有有效解决方案
    // 初始化棋盘，n x n的二维数组，初始值为'.'
    let board = new Array(n).fill('.').map((item) => new Array(n).fill('.'));

    /**
     * 检查在指定位置放置皇后是否有效
     * @param {number} row - 行索引
     * @param {number} col - 列索引
     * @return {boolean} - 位置是否有效
     */
    const isValid = (row , col) => {
        // 检查同一列
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        // 检查左上到右下对角线
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        // 检查右上到左下对角线
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    /**
     * 回溯函数，从上到下放置皇后
     * @param {number} row - 当前处理的行
     */
    const backtracking = (row) => {
        // 终止条件：已经处理完所有行
        if (row === n) {
            // 将当前棋盘状态转换为所需格式并添加到结果中
            res.push(board.map((item) => item.join('')));
            return;
        }
        // 尝试在当前行的每一列放置皇后
        for (let i = 0; i < n; i++) {
            // 检查当前位置是否可以放置皇后
            if (!isValid(row, i)) continue;
            // 放置皇后
            board[row][i] = 'Q';
            // 递归处理下一行
            backtracking(row + 1);
            // 回溯：移除皇后
            board[row][i] = '.';
        }
    };

    // 从第0行开始回溯
    backtracking(0);
    return res;
};
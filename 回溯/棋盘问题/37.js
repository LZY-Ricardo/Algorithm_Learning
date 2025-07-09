// 37. 解数独
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    /**
     * 检查在指定位置放置数字是否有效
     * @param {number} row - 行索引
     * @param {number} col - 列索引
     * @param {string} num - 要放置的数字
     * @return {boolean} - 位置是否有效
     */
    const isValid = (row, col, num) => {
        // 检查同一列
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }
        // 检查同一行
        for (let j = 0; j < 9; j++) {
            if (board[row][j] === num) return false;
        }
        // 检查3x3子网格
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] === num) return false;
            }
        }
        return true;
    };

    /**
     * 回溯函数，尝试填充数独
     * @return {boolean} - 是否找到解
     */
    const backtracking = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === '.') {
                    for (let k = 1; k <= 9; k++) {
                        const num = String(k);
                        if (isValid(i, j, num)) {
                            board[i][j] = num;
                            if (backtracking()) return true;
                            board[i][j] = '.'; // 回溯
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    backtracking();
};
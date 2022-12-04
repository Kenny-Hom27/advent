import {nums, boards} from './inputs.js'

const drawings = nums.split(',')
const indvBoards = boards.split(/\n\s*\n/).map(board => board.split(/\r?\n/).map(b => b.split(' ').filter(n => n)))

function checkBoard(board) {
    for (let i=0; i<board.length; i++) {
        if (board[i].join('') === 'xxxxx') return true
        if (board[0][i] + board[1][i] + board[2][i] + board[3][i] + board[4][i] === 'xxxxx' ) return true
    }

    return false
}

// let winningBoard 
// let winningNum

// for (let i=0; i<drawings.length; i++) {
//     let curNum = drawings[i]

//     for (let j=0; j<indvBoards.length; j++) {
//         for (let k=0; k< indvBoards[j].length; k++) {
//             if (indvBoards[j][k][0] === curNum) indvBoards[j][k][0] = 'x'
//             if (indvBoards[j][k][1] === curNum) indvBoards[j][k][1] = 'x'
//             if (indvBoards[j][k][2] === curNum) indvBoards[j][k][2] = 'x'
//             if (indvBoards[j][k][3] === curNum) indvBoards[j][k][3] = 'x'
//             if (indvBoards[j][k][4] === curNum) indvBoards[j][k][4] = 'x'
//         }

//         if (checkBoard(indvBoards[j])) {
//             winningBoard = indvBoards[j]
//             winningNum = curNum
//             break
//         }
//     }
//     if (winningBoard) break
// }

let lastWinningBoard
let lastWinningNum
let totalBoards = indvBoards.slice()

for (let i=0; i<drawings.length; i++) {
    let curNum = drawings[i]

    for (let j=0; j<totalBoards.length; j++) {
        for (let k=0; k< totalBoards[j].length; k++) {
            if (totalBoards[j][k][0] === curNum) totalBoards[j][k][0] = 'x'
            if (totalBoards[j][k][1] === curNum) totalBoards[j][k][1] = 'x'
            if (totalBoards[j][k][2] === curNum) totalBoards[j][k][2] = 'x'
            if (totalBoards[j][k][3] === curNum) totalBoards[j][k][3] = 'x'
            if (totalBoards[j][k][4] === curNum) totalBoards[j][k][4] = 'x'
        }

        if (totalBoards.length === 1 && checkBoard(totalBoards[j])) {
            lastWinningBoard = totalBoards[j]
            lastWinningNum = curNum
        }

        if (checkBoard(totalBoards[j])) {
            totalBoards.splice(j, 1)
            j--
        }
    }
}

console.log('winner', lastWinningBoard, lastWinningNum)
console.log(totalBoards)
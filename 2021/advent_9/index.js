import {input} from './inputs.js'

// const input = `2199943210
// 3987894921
// 9856789892
// 8767896789
// 9899965678`

const heights = input.split(/\r?\n/).map(n => n.split("").map(l => parseInt(l)))

let total = 0

// for (let i=0; i<heights.length; i++) {
//     for (let j=0; j<heights[i].length; j++) {
//         if ((i === 0 && j === 0) || (i === 0 && j === heights[i].length-1) || (i === heights.length-1 && j === 0) || (i === heights.length-1 && j === heights[i].length-1)) continue
//         let cur = heights[i][j]

//         if (i > 0 && j > 0 && i < heights.length-1 && j < heights[i].length-1) {
//             let top = heights[i-1][j]
//             let left = heights[i][j-1]
//             let right = heights[i][j+1]
//             let bot = heights[i+1][j]
//             if (cur < top && cur < left && cur < bot && cur < right) {
//                 total += (cur+1)
//             }
//         }

//         if (i === 0) {
//             let left = heights[i][j-1]
//             let right = heights[i][j+1]
//             let bot = heights[i+1][j]

//             if (cur < left && cur < bot && cur < right) {
//                 total += (cur+1)
//             }
//         }

//         if (j === 0) {
//             let top = heights[i-1][j]
//             let right = heights[i][j+1]
//             let bot = heights[i+1][j]
//             if (cur < top && cur < bot && cur < right) {
//                 total += (cur+1)
//             }
//         }

//         if (i === heights.length-1) {
//             let top = heights[i-1][j]
//             let left = heights[i][j-1]
//             let right = heights[i][j+1]
//             if (cur < top && cur < left && cur < right) {
//                 total += (cur+1)
//             }
//         }

//         if (j === heights[i].length-1) {
//             let top = heights[i-1][j]
//             let left = heights[i][j-1]
//             let bot = heights[i+1][j]
//             if (cur < top && cur < left && cur < bot) {
//                 total += (cur+1)
//             }
//         }

//     }
// }

// console.log(total)

const grid = input.split(/\r?\n/)
const height = heights.length
const width = heights[0].length
const rowOffsets = [-1, 0, 1, 0];
const colOffsets = [0, 1, 0, -1];
const visited = Array.from(Array(height), () => Array(width).fill(false));
const basins = []

const pointInGrid = (r, c, height, width) => r >= 0 && c >= 0 && r < height && c < width;

for (let r=0; r<height; r++) {
    for (let c=0; c<width; c++) {
        const queue = [[r, c]]
        let size = 0

        while (queue.length) {
            const [r, c] = queue.shift()

            if (grid[r][c] === '9' || visited[r][c]) continue
            size++
            visited[r][c] = true
            for (let i=0; i<4; i++) {
                const rr = r + rowOffsets[i]
                const cc = c + colOffsets[i]
                if (pointInGrid(rr, cc, height, width)) queue.push([rr,cc])
            }
        }
        if (size) basins.push(size)
    }
}

total = basins.sort((a,b) => a-b).slice(-3).reduce((a,b) => a*b)
console.log(total)

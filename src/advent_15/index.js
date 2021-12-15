import {input} from './inputs.js'

// const input = `1163751742
// 1381373672
// 2136511328
// 3694931569
// 7463417111
// 1319128137
// 1359912421
// 3125421639
// 1293138521
// 2311944581`

const nums = input.split(/\r?\n/).map(l => l.split("").map(n => parseInt(n)))

const height = nums.length
const width = nums[0].length

// let paths = []
// for (let i=0; i<height; i++) {
//     paths.push([])

//     for (let j=0; j<width; j++) {
//         paths[i][j] = 0
//     }
// }

// for (let i=0; i<height; i++) {
//     for (let j=0; j<width; j++) {
//         if (i === 0 && j === 0) {
//             paths[i][j] = 0
//         } else {
//             let p1 = i-1 >= 0 ? paths[i-1][j] : Infinity
//             let p2 = j-1 >= 0 ? paths[i][j-1] : Infinity 
//             paths[i][j] = Math.min(p1, p2) + nums[i][j]
//         }

//     }
// }

// console.log(paths[height-1][width-1])

const adj = [[1, 0], [0, 1], [-1, 0], [0, -1]]
const findPath = (map, startPos = [0, 0]) => {
    const queue = [{ pos: startPos, total: 0 }];
    const visited = new Set();
    while (queue.length) {
        const { pos: [x, y], total } = queue.shift();
        if (y === map.length - 1 && x === map[0].length - 1) return total;

        for (let i=0; i<adj.length; i++) {
            let posX = adj[i][0] + x
            let posY = adj[i][1] + y 
            if (!map[posX]?.[posY] || visited.has(posX + 'x' + posY)) continue

            visited.add(posX + 'x' + posY);
            queue.push({ pos: [posX, posY], total: total + map[posX][posY] });
        }

        queue.sort((a, b) => a.total - b.total);
    }
  };
  
export const part1 = findPath(nums);

const map = [...Array(height * 5)].map((_, y) =>
[...Array(width * 5)].map((_, x) =>
    1 + ((nums[y % height][x % width] - 1 + Math.trunc(x / width) + Math.trunc(y / height)) % 9)
))

const part2 = findPath(map)
  
console.log(part1, part2)
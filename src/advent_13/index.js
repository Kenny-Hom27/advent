import {inputOne, inputTwo} from './inputs.js'

// const inputOne = `6,10
// 0,14
// 9,10
// 0,3
// 10,4
// 4,11
// 6,0
// 6,12
// 4,1
// 0,13
// 10,12
// 3,4
// 3,0
// 8,4
// 1,10
// 2,14
// 8,10
// 9,0`

// const inputTwo = `fold along y=7
// fold along x=5`

const points = inputOne.split(/\r?\n/).map(s => s.split(',').map(n => parseInt(n)))
const folds = inputTwo.split(/\r?\n/).map(s => s.split('fold along ')[1]).map(str => str.split("="))

let maxX = Math.max(...points.map(p => p[0]))
let maxY = Math.max(...points.map(p => p[1]))

let initialMap = []

for (let i=0; i<=maxY; i++) {
    initialMap.push([])
    for (let j=0; j<=maxX; j++) {
        initialMap[i].push('.')
    }
}

for (let i=0; i<points.length; i++) {
    let [a,b] = points[i]
    initialMap[b][a] = '#'
}

for (let i=0; i<folds.length; i++) {
    let [axis, num] = folds[i]

    let startIdx = parseInt(num)
    if (axis === 'y') {
        let idx = 1
        for (let j=startIdx+1; j<initialMap.length; j++) {
            for (let k=0; k<initialMap[0].length; k++) {
                if (initialMap[j][k] === '#') {
                    initialMap[startIdx-idx][k] = '#'
                }
            }
            idx++
        }
        initialMap = initialMap.slice(0, startIdx)
    }

    if (axis === 'x') {
        for (let j=0; j<initialMap.length; j++) {
            let idx = 1
            for (let k=startIdx+1; k<initialMap[0].length; k++) {
                if (initialMap[j][k] === '#') {
                    initialMap[j][startIdx-idx] = '#'
                }
                idx++
            }
        }
        initialMap = initialMap.map(row => row.slice(0, startIdx))     
    }
}

let total = 0

for (let i=0; i<initialMap.length; i++) {
    for (let j=0; j< initialMap[i].length; j++) {
        if (initialMap[i][j] === '#') total++
    }
}

console.log(initialMap)

// '#', '.', '.', '.', '.', '#', '#', '#', '.', '.', '#', '#', '#', '#', '.', '.', '.', '#', '#', '.', '#', '#', '#', '.', '.', '.', '.', '#', '#', '.', '#', '#', '#', '#', '.', '#', '.', '.', '#', '.'
// '#', '.', '.', '.', '.', '#', '.', '.', '#', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '#', '.', '.', '#', '.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '.', '#', '.', '.', '#', '.'
// '#', '.', '.', '.', '.', '#', '.', '.', '#', '.', '#', '#', '#', '.', '.', '.', '.', '.', '#', '.', '#', '#', '#', '.', '.', '.', '.', '.', '#', '.', '#', '#', '#', '.', '.', '#', '#', '#', '#', '.'
// '#', '.', '.', '.', '.', '#', '#', '#', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '#', '.', '.', '#', '.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '.', '#', '.', '.', '#', '.'
// '#', '.', '.', '.', '.', '#', '.', '#', '.', '.', '#', '.', '.', '.', '.', '#', '.', '.', '#', '.', '#', '.', '.', '#', '.', '#', '.', '.', '#', '.', '#', '.', '.', '.', '.', '#', '.', '.', '#', '.'
// '#', '#', '#', '#', '.', '#', '.', '.', '#', '.', '#', '.', '.', '.', '.', '.', '#', '#', '.', '.', '#', '#', '#', '.', '.', '.', '#', '#', '.', '.', '#', '#', '#', '#', '.', '#', '.', '.', '#', '.'
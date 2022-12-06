import {input} from './inputs.js'

const boxes = {
    1: ['B', 'G', 'S', 'C'], 
    2: ['T', 'M', 'W', 'H', 'J', 'N', 'V', 'G'],
    3: ['M', 'Q', 'S'],
    4: ['B', 'S', 'L', 'T', 'W', 'N', 'M'],
    5: ['J', 'Z', 'F', 'T', 'V', 'G', 'W', 'P'],
    6: ['C', 'T', 'B', 'G', 'Q', 'H', 'S'],
    7: ['T', 'J', 'P', 'B', 'W'],
    8: ['G', 'D', 'C', 'Z', 'F', 'T', 'Q', 'M'],
    9: ['N', 'S', 'H', 'B', 'P', 'F'],
}

const dir = input.split(/\r?\n/)

const dirs = dir.map(d => d.split(' '))
const counts = dirs.map(l => ({'c': l[1], 'f': l[3], 't': l[5]}))


// for (let move of counts) {
//     let count = move.c
//     let from = move.f
//     let to = move.t

//     for (let i=count; i>0; i--) {
//         let cur = boxes[from].pop()
//         boxes[to].push(cur)
//     }
// }

for (let move of counts) {
    let count = move.c
    let from = move.f
    let to = move.t

    let added = []

    for (let i=count; i>0; i--) {
        let cur = boxes[from].pop()
        added.unshift(cur)
    }

    boxes[to] = [...boxes[to], ...added]
}


console.log(boxes)
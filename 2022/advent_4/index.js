
import {input} from './inputs.js'

const pairs = input.split(/\r?\n/)

const splitPairs = pairs.map(pair => pair.split(','))

const dict = {}

// for (let i=0; i<splitPairs.length; i++) {
//     const p1 = splitPairs[i][0].split('-')
//     const p2 = splitPairs[i][1].split('-')

//     let p1Start = Number(p1[0])
//     let p1End = Number(p1[1])
//     let p2Start = Number(p2[0])
//     let p2End = Number(p2[1])

//     if ((p2Start <= p1Start) && (p2End >= p1End)) {
//         dict[i] = true
//     } 

//     if (p1Start <= p2Start && p1End >= p2End) {
//         dict[i] = true
//     }
// }

for (let i=0; i<splitPairs.length; i++) {
    const p1 = splitPairs[i][0].split('-')
    const p2 = splitPairs[i][1].split('-')

    let p1Start = Number(p1[0])
    let p1End = Number(p1[1])
    let p2Start = Number(p2[0])
    let p2End = Number(p2[1])

    if (p2Start <= p1End && p2End >= p1Start) {
        dict[i] = true
    } 

    if (p1Start <= p2End && p1End >= p2Start) {
        dict[i] = true
    }
}

console.log(Object.keys(dict).length)
import {input} from './inputs.js'

const nums = input.split(/\r?\n/)

// const zeroCount = [0,0,0,0,0,0,0,0,0,0,0,0]
// const oneCount = [0,0,0,0,0,0,0,0,0,0,0,0]

// for (let i=0; i<nums.length; i++) {
//     let n = nums[i]

//     let split = n.toString().split("")

//     for (let j=0; j<split.length; j++) {
//         if (split[j] === '0') zeroCount[j]++
//         if (split[j] === '1') oneCount[j]++
//     } 
// }

// let first = ""
// let second = ""

// for (let i=0; i<zeroCount.length; i++) {
//     if (zeroCount[i] > oneCount[i]) {
//         first += '0'
//         second += '1'
//     } else {
//         second += '0'
//         first += '1'  
//     }
// }
// console.log(zeroCount, oneCount, parseInt(first, 2) * parseInt(second, 2))


let cur = nums.slice()
let idx = 0

while (cur.length > 1) {
    console.log(cur.length)
    let zeroHolder = []
    let oneHolder = []
    for (let i=0; i<cur.length; i++) {
        let temp = cur[i]
        if (temp[idx] === '0') zeroHolder.push(temp)
        if (temp[idx] === '1') oneHolder.push(temp)
    }
    idx++
    if (oneHolder.length >= zeroHolder.length) {
        cur = oneHolder.slice()
    } else {
        cur = zeroHolder.slice()
    }
}

let cur2 = nums.slice()
let idx2 = 0

while (cur2.length > 1) {
    let zeroHolder = []
    let oneHolder = []
    for (let i=0; i<cur2.length; i++) {
        let temp = cur2[i]
        if (temp[idx2] === '0') zeroHolder.push(temp)
        if (temp[idx2] === '1') oneHolder.push(temp)
    }
    idx2++
    if (zeroHolder.length <= oneHolder.length) {
        cur2 = zeroHolder.slice()
    } else {
        cur2 = oneHolder.slice()
    }
}

console.log(cur, cur2, parseInt(cur[0], 2) * parseInt(cur2[0], 2))
console.log(cur, cur2)





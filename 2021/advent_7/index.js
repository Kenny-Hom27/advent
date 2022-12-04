import {inputOne} from './inputs.js'
// const inputOne = '16,1,2,0,4,2,7,1,2,14'

const crabs = inputOne.split(",").map(n => parseInt(n)).sort((a,b) => a-b)

// let ans = 0
// let median = crabs[(crabs.length / 2)]
// for (let i = 0; i < crabs.length; i++) {
//     ans += Math.abs(median - crabs[i])
// } 


let moves = 0
let avg = Math.floor((crabs.reduce((a,b) => a+b) / crabs.length))
for (let i = 0; i < crabs.length; i++) {
    let linearDistance = Math.abs(avg - crabs[i])
    moves += (linearDistance * (linearDistance + 1)) / 2
} 

console.log(moves)

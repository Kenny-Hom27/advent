import {inputOne} from './inputs.js'

const nums = inputOne.split(/\r?\n/).map(n => parseInt(n))

let totalIncreasing = 0

// part1
// for (let i=1; i<nums.length; i++) {
//     if (nums[i] > nums[i-1]) totalIncreasing++
// }

for (let i=0; i<nums.length-3; i++) {
    if (nums[i] < nums[i+3]) totalIncreasing++
}

console.log(totalIncreasing)
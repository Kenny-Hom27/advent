import {input} from './inputs.js'

const dirs = input.split(/\r?\n/)

let depth = 0
let horizontal = 0
let aim = 0

for (let i=0; i<dirs.length; i++) {
    let value = parseInt(dirs[i].split(" ")[1])
    if (dirs[i].includes('forward')) {
        horizontal += value
        depth += (aim*value)
    } else if (dirs[i].includes('up')) {
        aim -= value
    } else if (dirs[i].includes('down')) {
        aim += value
    }
}

console.log(depth * horizontal)
import {input} from './inputs.js'

const inputSplit = input.split("\n\n")

const sums = inputSplit.map(inputSet => {
    return inputSet.split(/\r?\n/).map(n => Number(n)).reduce((a,b) => a+b)
})

const sorted = sums.sort((a,b) => a-b)

console.log(sorted[sorted.length-1] + sorted[sorted.length-2] + sorted[sorted.length-3])
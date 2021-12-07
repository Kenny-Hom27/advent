import {inputOne} from './inputs.js'
// const inputOne = `3,4,3,1,2`
const fishes = inputOne.split(",").map(n => parseInt(n))

let fishCount = new Map()
for (let fish of fishes) {
    fishCount.get(fish) ? fishCount.set(fish, fishCount.get(fish) + 1) : fishCount.set(fish, 1)
}

for (let i=256; i>0; i--) {
    let fishTemp = new Map()

    if (fishCount.get(0)){
        fishTemp.set(6, fishCount.get(0))
        fishTemp.set(8, fishCount.get(0))
    }
    if (fishCount.get(1)) fishTemp.set(0, fishCount.get(1))
    if (fishCount.get(2)) fishTemp.set(1, fishCount.get(2))
    if (fishCount.get(3)) fishTemp.set(2, fishCount.get(3))
    if (fishCount.get(4)) fishTemp.set(3, fishCount.get(4))
    if (fishCount.get(5)) fishTemp.set(4, fishCount.get(5))
    if (fishCount.get(6)) fishTemp.set(5, fishCount.get(6))
    if (fishCount.get(7)) { 
        if (fishTemp.get(6)) {
            fishTemp.set(6, fishTemp.get(6) + fishCount.get(7))
        } else {
            fishTemp.set(6, fishCount.get(7))
        }
    }
    if (fishCount.get(8)) fishTemp.set(7, fishCount.get(8))
    fishCount = new Map(fishTemp)
}

let total = 0

for (let [fishDays, fishes] of fishCount.entries()) {
    total += fishes
}

console.log(total)

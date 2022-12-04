import {input} from './inputs.js'

// const input = `CH -> B
// HH -> N
// CB -> H
// NH -> C
// HB -> C
// HC -> B
// HN -> C
// NN -> C
// BH -> H
// NC -> B
// NB -> B
// BN -> B
// BB -> N
// BC -> B
// CC -> N
// CN -> C`

// const start = 'NNCB'

const start = 'BVBNBVPOKVFHBVCSHCFO'.split("")
const poly = input.split(/\r?\n/).map(s => s.split(' -> '))

// let map = new Map()

// for (let [a,b] of poly) {
//     map.set(a, b)
// }

// for (let i=0; i<10; i++) {

//     let idx = 0
//     while (idx < start.length) {
//         let cur = start[idx] + start[idx+1]

//         if (map.get(cur)) {
//             start.splice(idx+1, 0, map.get(cur))
//             idx++
//         }
//         idx++
//     }
// }

// const count = {}
// for (let i=0; i<start.length; i++) {
//     const letter = start[i]
//     count[letter] ? count[letter]++ : count[letter] = 1
// }

let pairCounter = {}

for (let i=0; i<start.length-1; i++) {
    const pair = start[i] + start[i+1]
    pairCounter[pair] = pairCounter[pair] + 1 || 1
}

for (let i=0; i<40; i++) {
    let newPairCounter = {}

    for (let [match, insert] of poly) {
        const insertCount = pairCounter[match] || 0

        const newMatch1 = match.charAt(0) + insert
        newPairCounter[newMatch1] = (newPairCounter[newMatch1] || 0) + insertCount

        const newMatch2 = insert + match.charAt(1)
        newPairCounter[newMatch2] = (newPairCounter[newMatch2] || 0) + insertCount

        pairCounter[match] = 0
    }

    for (const key of Object.keys(newPairCounter)) {
        pairCounter[key] = (pairCounter[key] || 0) + newPairCounter[key]
    }
}

let count = {}

for (let key of Object.keys(pairCounter)) {
    let elemCount = pairCounter[key]

    const elem1 = key.charAt(0);
    count[elem1] = (count[elem1] || 0) + elemCount;

    const elem2 = key.charAt(1);
    count[elem2] = (count[elem2] || 0) + elemCount;
}

for (let [key, value] of Object.entries(count)) {
    if (value) {
        // Increase odd by 1 to weird off-by-one bug
        if (value % 2 === 1) {
            value++;
        }

        // Compute correct amount
        count[key] = value / 2;
    }
}

let min = Infinity
let max = -Infinity

for (let k in count) {
    min = Math.min(min, count[k])
    max = Math.max(max, count[k])
}

console.log(max-min)
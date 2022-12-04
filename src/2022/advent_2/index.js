import {input} from './inputs.js'

const games = input.split(/\r?\n/)

const values = {"A": 1, "B": 2, "C": 3, "X": 1, "Y": 2, 'Z': 3}

const wins = {"A": "Z", "B": "X", "C": "Y"}
const loss = {"A": "Y", "B": 'Z', "C": "X"}
const ties = {"A": "X", "B": "Y", "C": 'Z'}
console.log(games[0])

let total = 0 

const res = games.map(game => game.split(" "))

console.log(res[0])

const nums = res.map(g => {
    const p1 = g[0]
    const p2 = g[1]


    let subtotal = values[p2]

    if (wins[p1] === p2) {
    } else if (loss[p1] === p2) {
        subtotal += 6
    } else {
        subtotal += 3
    }

    total += subtotal
    return subtotal
})

let total1 = 0

const nums1 = res.map(g => {
    const p1 = g[0]
    const p2 = g[1]

    if (p2 === 'X') {
        total1 += values[wins[p1]]
    } else if (p2 === 'Z') {
        total1 += values[loss[p1]]
        total1 += 6
    } else {
        total1 += values[ties[p1]]
        total1 += 3
    }
})

console.log(total1)
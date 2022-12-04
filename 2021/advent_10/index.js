import {input} from './inputs.js'
// const input = `[({(<(())[]>[[{[]{<()<>>
// [(()[<>])]({[<{<<[]>>(
// {([(<{}[<>[]}>{[]{[(<()>
// (((({<>}<{<{<>}{[]{[]{}
// [[<[([]))<([[{}[[()]]]
// [{[{({}]{}}([{[{{{}}([]
// {<[[]]>}<{[{[{[]{()[[[]
// [<(<(<(<{}))><([]([]()
// <{([([[(<>()){}]>(<<{{
// <{([{{}}[<[[[<>{}]]]>[]]`

const chunks = input.split(/\r?\n/)

let symbols = {')': '(', ']': '[', '>': '<', '}': '{'}
let values = {')': 3, ']': 57, '>': 25137, '}': 1197}

let total = 0

let incomplete = []
for (let i=0; i<chunks.length; i++) {
    let cur = chunks[i]

    let temp = []
    let broken = false
    for (let j=0; j<cur.length; j++) {
        let s = cur[j]
        if (symbols[s]) {
            let open = temp.pop()
            if (open !== symbols[s]) { 
                total += values[s]
                broken = true
                break
            }
        } else {
            temp.push(s)
        }
    }

    if (temp.length && !broken) {
        incomplete.push(temp)
    }
}

let symbols2 = {'(': ')', '[': ']', '<': '>', '{': '}'}
let values2 = {')': 1, ']': 2, '>': 4, '}': 3}
let scores = []
for (let i=0; i<incomplete.length; i++) {
    let cur = incomplete[i]
    let str = ''
    while (cur.length) {
        let s = cur.pop()
        str += symbols2[s]
    }

    let score = 0
    for (let s of str) {
        score *= 5
        score += values2[s]
    }

    scores.push(score)
}

let sorted = scores.sort((a,b) => a-b)
console.log(sorted[Math.floor(sorted.length/2)])
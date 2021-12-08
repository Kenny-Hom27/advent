import {input} from './inputs.js'

// const input = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
// edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
// fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
// fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
// aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
// fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
// dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
// bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
// egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
// gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`

const lines = input
.split(/\r?\n/) 
.map(line => line.split(" | ")
.map(l => l.split(" ")
.map(w => w.split("").sort().join(""))
))

console.log(lines[0])

let res = []

let total = 0

function count(strA, strB) {
    let sA = strA.split("")
    let sB = strB.split("")

    let total = 0
    for (let s of sA) {
        if (sB.includes(s)) total++
    }

    return total
}

for (let i=0; i<lines.length; i++) {
    let inp = lines[i][0].sort((a,b) => a.length - b.length)
    let output = lines[i][1]
    let letMap = {1: inp[0], 7: inp[1], 4: inp[2], 8: inp[9]}

    let temp = []
    for (let j=0; j<output.length; j++) {
        let cur = output[j]
        if (cur.length === 2) temp.push(1)
        if (cur.length === 3) temp.push(7)
        if (cur.length === 4) temp.push(4)
        if (cur.length === 7) temp.push(8)

        if (cur.length === 5) {
            if (count(letMap[1], cur) === 2) {
                temp.push(3)
            } else if (count(letMap[4], cur) === 3) {
                temp.push(5)
            } else {
                temp.push(2)
            }
        }

        if (output[j].length === 6) {
            if (count(letMap[1], cur) === 1) {
                temp.push(6)
            } else if (count(letMap[4], cur) === 4) {
                temp.push(9)
            } else {
                temp.push(0)
            }
        }
    }

    res.push(parseInt(temp.join("")))
}

console.log(res.reduce((a,b) => a+b))
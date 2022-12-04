import {input} from './inputs.js'

const sacks = input.split(/\r?\n/)
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const dict = {}
letters.split("").map((l, i) => dict[l] = i+1)

let total = 0

console.log(dict)

sacks.forEach(s => {
    const s1 = s.slice(0, (s.length/2))
    const s2 = s.slice((s.length/2))

    for (let i=0; i<s1.length; i++) {
        if (s2.includes(s1[i])) {
            total += dict[s1[i]]
            break
        }
    }

})

let total1 = 0

for (let i=0; i<sacks.length; i+= 3) {
    const s1 = sacks[i]
    const s2 = sacks[i+1]
    const s3 = sacks[i+2]

    for (let j=0; j<s1.length; j++) {
        if (s2.includes(s1[j]) && s3.includes(s1[j])) {
            total1 += dict[s1[j]]
            break
        }
    }
}

console.log(total1)

import {input} from './inputs.js'

const paths = input.split(/\r?\n/).map(s => s.split('-'))

const map = new Map()

for (let [a,b] of paths) {
    map.set(a, (map.get(a) || []).concat(b))
    map.set(b, (map.get(b) || []).concat(a))
}

let total = 0
function traverse(node, path=[], condition = () => true) {
    if (node === 'end') {
        total += 1
        return
    }

    for (let n of map.get(node)) {
        // If it is uppercase, if path doesnt include n , or if checkPath is the first instance of it => allows it to traverse
        if (n !== 'start' && !(n.toLowerCase() === n && path.includes(n) && checkPath(path))) {
            traverse(n, [...path, n], condition)
        }
    }
}

function checkPath(path) {
    const lowercases = path.filter(v => v === v.toLowerCase())

    // Only makes the first instance false, which allows it pass through to traverse
    return lowercases.some((v, i, arr) => arr.indexOf(v) < i)
}

traverse('start')
console.log(total)


// import {input} from './inputs.js'

let input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`

const octo = input.split(/\r?\n/).map(l => l.split("").map(n => parseInt(n)))
let flashes = 0
let height = octo.length-1
let width = octo[0].length-1
let idx

for (let c=0; c<10000; c++) {
    let seen = {}
    
    for (let i=0; i<octo.length; i++) {
        let cur = octo[i]
        for (let j=0; j<octo[i].length; j++) {
            cur[j]++
            let s = i + 'x' + j
            if (cur[j] > 9 && !seen[s]) {
                seen[s] = true
                checkFlash(i, j, seen)
            }
        }
    }

    if (Object.keys(seen).length === 100) {
        idx = c
        break
    }

    flashes += Object.keys(seen).length
    for (let a=0; a<octo.length; a++) {
        for (let b=0; b<octo[a].length; b++) {
            if (octo[a][b] > 9) {
                octo[a][b] = 0
            }
        }
    }
}

function checkFlash(i, j, seen) {
    if (i < 0 || j < 0 || i>octo.length || j>octo[0].length) return
    let s
    // top row
    if (i> 0 && j> 0 && octo[i-1][j-1] >= 0) { 
        octo[i-1][j-1]++
        s = (i-1) + 'x' + (j-1)
        if (octo[i-1][j-1] > 9 && !seen[s]) {
            seen[s] = true
            checkFlash(i-1, j-1, seen) 
        }
    }
    if (i>0 && octo[i-1][j] >= 0) {
        octo[i-1][j]++
        s= (i-1) + 'x' + j
        if (octo[i-1][j] > 9 && !seen[s]) { 
            seen[s] = true
            checkFlash(i-1, j, seen) 
        }
    }
    if (i> 0 && j< width && octo[i-1][j+1] >= 0) {
        octo[i-1][j+1]++
        s = (i-1) + 'x' + (j+1)
        if (octo[i-1][j+1] > 9 && !seen[s]) { 
            seen[s] = true
            checkFlash(i-1, j+1, seen) 
        }
    }
    // cur row
    if (j>0 && octo[i][j-1] >= 0) { 
        octo[i][j-1]++
        s = i + 'x' + (j-1)
        if (octo[i][j-1] > 9 && !seen[s]) { 
            seen[s] = true
            checkFlash(i, j-1, seen) 
        }
    }
    if (j< width && octo[i][j+1] >= 0) {
        octo[i][j+1]++
        s = i + 'x' + (j+1)
        if (octo[i][j+1] > 9 && !seen[s]) { 
            seen[s] = true
            checkFlash(i, j+1, seen) 
        }
    }
    // bot row
    if (i< height && j>0 && octo[i+1][j-1] >= 0) { 
        octo[i+1][j-1]++
        s = (i+1) + 'x' + (j-1)
        if (octo[i+1][j-1] > 9 && !seen[s]) { 
            seen[s] = true
            checkFlash(i+1, j-1, seen) 
        }
    }
    if (i< height && octo[i+1][j] >= 0) {
        octo[i+1][j]++
        s=(i+1) + 'x' + j
        if (octo[i+1][j] > 9 && !seen[s]) { 
            seen[s] = true
            checkFlash(i+1, j, seen) 
        }
    }
    if (i<height && j<width && octo[i+1][j+1] >= 0) {
        octo[i+1][j+1]++
        s = (i+1) + 'x' + (j+1)
        if (octo[i+1][j+1] > 9 && !seen[s]) { 
            seen[s] = true
            checkFlash(i+1, j+1, seen) 
        }
    }    
    return Object.keys(seen).length
}

console.log(idx)
import {inputOne} from './inputs.js'
// const inputOne = `0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2`

const coords = inputOne.split(/\r?\n/).map(n => n.split(' -> ').map(c => c.split(',')))

const coordMap = {}
const multipleItem = {}

for (let coord of coords) {
    const x1 = parseInt(coord[0][0])
    const x2 = parseInt(coord[1][0])
    const y1 = parseInt(coord[0][1])
    const y2 = parseInt(coord[1][1])

    // if (x1 === x2) {
    //     let min = y1 < y2 ? y1 : y2
    //     let max = y1 < y2 ? y2 : y1

    //     for (let i=min; i<= max; i++) {
    //         let coordItem = x1 + 'x' + i
    //         if (coordMap[coordItem]) {
    //             coordMap[coordItem] += 1
    //             multipleItem[coordItem] = coordMap[coordItem]
    //         } else {
    //             coordMap[coordItem] = 1
    //         }
    //     }
    // } else if (y1 === y2) {
    //     let min = x1 < x2 ? x1 : x2
    //     let max = x1 < x2 ? x2 : x1

    //     for (let i=min; i<= max; i++) {
    //         let coordItem = i + 'x' + y1
    //         if (coordMap[coordItem]) {
    //             coordMap[coordItem] += 1
    //             multipleItem[coordItem] = coordMap[coordItem]
    //         } else {
    //             coordMap[coordItem] = 1
    //         }
    //     }
    // }

    const incrementX = x1 < x2 ? 1 : x1 > x2 ? -1 : 0
    const incrementY = y1 < y2 ? 1 : y1 > y2 ? -1 : 0

    let curX = x1
    let curY = y1

    while (curX !== x2 || curY !== y2) {
        let c = curX + 'x' + curY

        if (coordMap[c]) {
            coordMap[c] = coordMap[c] + 1
            multipleItem[c] = true
        } else {
            coordMap[c] = 1
        }

        curX += incrementX
        curY += incrementY
    }

    let temp = curX + 'x' + curY
    if (coordMap[temp]) {
        coordMap[temp] = coordMap[temp] + 1
        multipleItem[temp] = true
    } else {
        coordMap[temp] = 1
    }

}


console.log(Object.keys(multipleItem).length)
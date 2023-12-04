import data from "./data.js";

const format = data
  .split(/\r?\n/)
  .map((i) => i.split(": ")[1])
  .map((i) => {
    const nums = i.split(" | ");

    const map = {};
    nums[0].split(" ").map((n) => {
      if (n) {
        map[n] = true;
      }
    });

    const n2 = nums[1].split(" ").filter((n) => n);

    return [map, n2];
  });

// function calc() {
//   let total = 0;
//   const map = {}

//   for (let n of format) {
//     const wins = n[0];
//     const nums = n[1];

//     for (let i = 0; i < nums.length; i++) {
//       let cur = nums[i];

//       if (wins[cur]) {
//         if (subCount) {
//           subCount *= 2;
//         } else {
//           subCount = 1;
//         }
//       }
//     }

//     console.log("sub", subCount);

//     total += subCount;
//   }

//   return total;
// }

function calc2() {
  let total = 0;
  const map = {};
  let cardNum = 1;

  for (let n of format) {
    const wins = n[0];
    const nums = n[1];

    let sub = 0;

    for (let i = 0; i < nums.length; i++) {
      let cur = nums[i];
      if (wins[cur]) {
        sub++;
      }
    }

    if (sub === 0) {
      if (!map[cardNum]) {
        map[cardNum] = 1;
      } else {
        map[cardNum]++;
      }
    } else {
      for (let i = 0; i <= sub; i++) {
        const curCard = cardNum + i;
        if (i === 0) {
          if (!map[cardNum]) {
            map[cardNum] = 1;
          } else {
            map[cardNum]++;
          }
          continue;
        }

        if (map[curCard]) {
          map[curCard] += map[cardNum];
        } else {
          map[curCard] = map[cardNum];
        }
      }
    }

    cardNum++;
  }

  for (let k in map) {
    total += map[k];
  }

  return total;
}

// 6227972
console.log(calc2());

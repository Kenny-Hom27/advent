import data from "./data.js";

// const steps = "RL";
// const data = `AAA = (BBB, CCC)
// BBB = (DDD, EEE)
// CCC = (ZZZ, GGG)
// DDD = (DDD, DDD)
// EEE = (EEE, EEE)
// GGG = (GGG, GGG)
// ZZZ = (ZZZ, ZZZ)`;

// const steps = "LR";

// const data = `11A = (11B, XXX)
// 11B = (XXX, 11Z)
// 11Z = (11B, XXX)
// 22A = (22B, XXX)
// 22B = (22C, 22C)
// 22C = (22Z, 22Z)
// 22Z = (22B, 22B)
// XXX = (XXX, XXX)`;

const map = {};
const aStart = [];

const format = data
  .split(/\r?\n/)
  .map((n) => n.split(" = "))
  .map((n) => {
    const moves = n[1].replace(")", "").replace("(", "").split(", ");
    if (n[0][2] === "A") {
      aStart.push(n[0]);
    }
    map[n[0]] = { L: moves[0], R: moves[1] };
  });

const steps = `LRRLRLRRLRRRLRLRLRRLRRRLRRRLRRLRRRLRLRLRLRLRLRLRRRLRRLRRRLLLLRRRLRLLLRRRLLRLLRRRLRRRLRLRRLRRRLRRRLLRRRLRLRRRLLRRRLRLLRRRLRRLLRLRLRLRRRLRLLRLRLRRRLRLLRLRLRRRLLRRRLRRLRRRLRLRRLRLRRLRLRRLRRRLLRRRLLLRRRLLRRLRRLRRLRLLRRLRRRLRRLRLRLRRLRRLLLRRLRLRRRLRRRLRRRLLLRLRRRLLRRRLRLLRRRR`;

// function calc() {
//   let count = 0;
//   let cur = "AAA";
//   const str = steps.repeat(1000);

//   for (let i = 0; i < str.length; i++) {
//     let step = str[i];
//     cur = map[cur][step];
//     count++;

//     if (cur === "ZZZ") {
//       return count;
//     }
//   }
// }

function calc2() {
  let count = 0;
  const str = steps.repeat(1000000);

  for (let i = 0; i < str.length; i++) {
    let step = str[i];

    for (let j = 0; j < aStart.length; j++) {
      let cur = aStart[j];
      let next = map[cur][step];

      aStart[j] = next;

      if (next[2] !== "Z") break;
    }

    count++;

    if (aStart.every((i) => i[2] === "Z")) {
      return count;
    }

    if (i === str.length - 1) {
      i = 0;
    }
  }
}

console.log(calc2());

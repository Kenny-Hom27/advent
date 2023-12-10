// import data from "./data.js";

const data = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const format = data
  .split(/\r?\n/)
  .map((i) => i.split(" ").map((n) => Number(n)));

// function calc() {
//   let total = 0;

//   for (let nums of format) {
//     let cur = [...nums];
//     let tempTotal = 0;

//     while (true) {
//       let temp = [];
//       for (let i = 0; i < cur.length - 1; i++) {
//         let n1 = cur[i];
//         let n2 = cur[i + 1];

//         temp.push(n2 - n1);
//       }

//       tempTotal += cur[cur.length - 1];

//       if (temp.every((a) => a === temp[0])) {
//         tempTotal += temp[0];
//         break;
//       }

//       cur = [...temp];
//     }

//     total += tempTotal;
//   }

//   return total;
// }

function calc2() {
  let total = 0;

  for (let nums of format) {
    let cur = [...nums];
    let tempTotal = 0;

    while (true) {
      let temp = [];
      for (let i = 0; i < cur.length - 1; i++) {
        let n1 = cur[i];
        let n2 = cur[i + 1];

        temp.push(n2 - n1);
      }

      tempTotal += cur[0];

      if (temp.every((a) => a === temp[0])) {
        tempTotal += temp[0];
        break;
      }

      cur = [...temp];
    }

    total += tempTotal;
  }

  return total;
}

console.log(calc2());

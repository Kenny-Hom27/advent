// import data from "./data.js";

// const data = `Time:        46     85     75     82
// Distance:   208   1412   1257   1410`;

const race = { 46: 208, 85: 1412, 75: 1257, 82: 1410 };
// const race = { 7: 9, 15: 40, 30: 200 };

// function calc() {
//   let total = 1;

//   for (let r in race) {
//     let time = r;
//     let dist = race[r];
//     let sub = 0;

//     for (let i = 0; i < time; i++) {
//       let charge = i;
//       let totalDist = i * (time - charge);

//       if (totalDist > dist) {
//         sub++;
//       }
//     }

//     total *= sub;
//   }

//   return total;
// }

function calc2() {
  let total = 0;
  // let time = 71530;
  // let dist = 940200;
  let time = 46857582;
  let dist = 208141212571410;

  let t1;
  let t2;
  for (let i = 0; i < time; i++) {
    let totalDist = i * (time - i);
    if (totalDist > dist) {
      t1 = i;
      break;
    }
  }

  for (let i = time; i > 0; i--) {
    let totalDist = i * (time - i);
    if (totalDist > dist) {
      t2 = i;
      break;
    }
  }

  return Math.abs(t1 - t2);
}

console.log(calc2());

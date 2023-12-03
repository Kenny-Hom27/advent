import data from "./data.js";

const format = data
  .split(/\r?\n/)
  .map((i) => i.split(": ")[1])
  .map((i) => i.split(";"))
  .map((i) => i.map((n) => n.split(", ")))
  .map((i) =>
    i.map((n) => {
      return n.map((z) => {
        const s = z.split(" ").filter((a) => a);
        return { [s[1]]: s[0] };
      });
    })
  );

const rule = { red: 12, green: 13, blue: 14 };

// function calc() {
//   let total = 0;
//   let id = 1;
//   for (let game of format) {
//     let ok = true;
//     for (let i = 0; i < game.length; i++) {
//       const cur = game[i];

//       console.log("currr", cur, "1", game);

//       for (let obj of cur) {
//         for (let key in obj) {
//           if (obj[key] > rule[key]) ok = false;
//         }
//       }
//     }

//     if (ok) {
//       total += id;
//     }
//     id++;
//   }

//   return total;
// }

function calc2() {
  let total = 0;
  for (let game of format) {
    let rMax = 0;
    let bMax = 0;
    let gMax = 0;
    for (let i = 0; i < game.length; i++) {
      const cur = game[i];

      for (let obj of cur) {
        for (let key in obj) {
          console.log("key", key, obj[key], "---", rMax, bMax, gMax);
          const cur = Number(obj[key]);
          if (key === "red" && cur > rMax) {
            rMax = cur;
          }
          if (key === "blue" && cur > bMax) {
            bMax = cur;
          }
          if (key === "green" && cur > gMax) {
            gMax = cur;
          }
        }
      }
    }

    console.log(rMax, bMax, gMax);
    let subtotal = rMax * bMax * gMax;
    total += subtotal;
  }

  return total;
}

console.log(calc2());

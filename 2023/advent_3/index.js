import data from "./data.js";

const format = data.split(/\r?\n/).map((i) => i.split(""));

const nums = {
  0: true,
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
};

// const symbols = {
//   "%": true,
//   $: true,
//   "=": true,
//   "+": true,
//   "*": true,
//   "/": true,
//   "@": true,
//   "-": true,
//   "&": true,
//   "#": true,
// };

// function calc() {
//   let total = 0;

//   for (let i = 0; i < format.length; i++) {
//     let hasSymbol = false;
//     let num = "";
//     for (let j = 0; j < format[i].length; j++) {
//       let cur = format[i][j];

//       if (num.length && !nums[cur]) {
//         if (hasSymbol) {
//           total += Number(num);
//         }
//         hasSymbol = false;
//         num = "";
//         continue;
//       }

//       if (nums[cur]) {
//         num += cur;

//         if (i > 0) {
//           const top = i > 0 && format[i - 1][j];
//           if (symbols[top]) hasSymbol = true;

//           if (j > 0) {
//             const topLeft = format[i - 1][j - 1];
//             if (symbols[topLeft]) hasSymbol = true;
//           }

//           if (j < format[i].length - 1) {
//             const topRight = format[i - 1][j + 1];
//             if (symbols[topRight]) {
//               hasSymbol = true;
//             }
//           }
//         }

//         if (j > 0) {
//           const left = format[i][j - 1];
//           if (symbols[left]) hasSymbol = true;
//         }

//         if (j < format[i].length - 1) {
//           const right = format[i][j + 1];
//           if (symbols[right]) hasSymbol = true;
//         }

//         if (i < format.length - 1) {
//           const bot = i > 0 && format[i + 1][j];
//           if (symbols[bot]) hasSymbol = true;

//           if (j > 0) {
//             const botLeft = format[i + 1][j - 1];
//             if (symbols[botLeft]) hasSymbol = true;
//           }

//           if (j < format[i].length - 1) {
//             const botRight = format[i + 1][j + 1];
//             if (symbols[botRight]) hasSymbol = true;
//           }
//         }
//       }
//     }

//     if (hasSymbol) {
//       total += Number(num);
//     }
//   }

//   return total;
// }

const symbol = { "*": true };

function calc2() {
  let total = 0;
  const map = {};

  for (let i = 0; i < format.length; i++) {
    let symbolCoord = "";
    let num = "";
    for (let j = 0; j <= format[i].length; j++) {
      let cur = format[i][j];

      if (num && !nums[cur]) {
        if (symbolCoord) {
          if (!map[symbolCoord]) {
            map[symbolCoord] = [];
          }

          map[symbolCoord].push(num);
        }
        symbolCoord = "";
        num = "";
      }

      if (nums[cur]) {
        num += cur;

        if (i > 0) {
          const top = i > 0 && format[i - 1][j];
          if (symbol[top]) {
            symbolCoord = `${i - 1}-${j}`;
          }

          if (j > 0) {
            const topLeft = format[i - 1][j - 1];
            if (symbol[topLeft]) {
              symbolCoord = `${i - 1}-${j - 1}`;
            }
          }

          if (j < format[i].length) {
            const topRight = format[i - 1][j + 1];
            if (symbol[topRight]) {
              symbolCoord = `${i - 1}-${j + 1}`;
            }
          }
        }

        if (j > 0) {
          const left = format[i][j - 1];
          if (symbol[left]) {
            symbolCoord = `${i}-${j - 1}`;
          }
        }

        if (j < format[i].length) {
          const right = format[i][j + 1];
          if (symbol[right]) {
            symbolCoord = `${i}-${j + 1}`;
          }
        }

        if (i < format.length - 1) {
          const bot = i > 0 && format[i + 1][j];
          if (symbol[bot]) {
            symbolCoord = `${i + 1}-${j}`;
          }

          if (j > 0) {
            const botLeft = format[i + 1][j - 1];
            if (symbol[botLeft]) {
              symbolCoord = `${i + 1}-${j - 1}`;
            }
          }

          if (j < format[i].length) {
            const botRight = format[i + 1][j + 1];
            if (symbol[botRight]) {
              symbolCoord = `${i + 1}-${j + 1}`;
            }
          }
        }
      }
    }
  }

  console.log(map);

  for (let key in map) {
    if (map[key].length === 2) {
      const first = Number(map[key][0]);
      const sec = Number(map[key][1]);

      total += first * sec;
    }
  }

  return total;
}

console.log(calc2());

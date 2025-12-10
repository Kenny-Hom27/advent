import { data } from "./data.js";

const format = data.split(/\r?\n/).map((r) => r.split(""));

const DIRS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function calc() {
  let count = 0;
  let lastCount = "hello";

  while (lastCount !== count) {
    lastCount = count;
    for (let r = 0; r < format.length; r++) {
      for (let c = 0; c < format[0].length; c++) {
        let tempCount = 0;
        if (format[r][c] !== "@") continue;

        for (let [dr, dc] of DIRS) {
          let row = r + dr;
          let col = c + dc;
          if (
            row < 0 ||
            col < 0 ||
            row >= format.length ||
            col >= format[0].length
          )
            continue;

          if (format[row][col] === "@") tempCount++;
        }

        if (tempCount < 4) {
          format[r][c] = "x";
          count++;
        }
      }
    }
  }

  return count;
}

console.log(calc());

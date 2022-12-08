import { input } from "./inputs.js";

const trees = input
  .split(/\r?\n/)
  .map((t) => t.split("").map((n) => Number(n)));

const count = {};

// // left to right
// for (let row = 0; row < trees.length; row++) {
//   let max = trees[row][0];
//   for (let col = 0; col < trees[row].length; col++) {
//     const cur = trees[row][col];

//     if (cur > max || col === 0) {
//       count[row + "x" + col] = trees[row][col] + "-" + max;
//     }

//     if (cur > max) {
//       max = cur;
//     }
//   }
// }

// // right to left
// for (let row = 0; row < trees.length; row++) {
//   let max = trees[row][trees[row].length - 1];
//   for (let col = trees[row].length - 1; col > 0; col--) {
//     const cur = trees[row][col];

//     if (cur > max || col === trees[row].length - 1) {
//       count[row + "x" + col] = trees[row][col] + "-" + max;
//     }

//     if (cur > max) {
//       max = cur;
//     }
//   }
// }

// // top to bottom
// for (let col = 0; col < trees[0].length; col++) {
//   let max = trees[0][col];
//   for (let row = 0; row < trees.length; row++) {
//     const cur = trees[row][col];

//     if (cur > max || row === 0) {
//       count[row + "x" + col] = trees[row][col] + "-" + max;
//     }
//     if (cur > max) {
//       max = cur;
//     }
//   }
// }

// // bottom to top
// for (let col = 0; col < trees[0].length; col++) {
//   let max = trees[trees.length - 1][col];
//   for (let row = trees.length - 1; row > 0; row--) {
//     const cur = trees[row][col];

//     if (cur > max || row === trees.length - 1) {
//       count[row + "x" + col] = trees[row][col] + "-" + max;
//     }

//     if (cur > max) {
//       max = cur;
//     }
//   }
// }

// 30373
// 25512
// 65332
// 33549
// 35390

let maxValue = 0;

// left to right
for (let row = 0; row < trees.length; row++) {
  for (let col = 0; col < trees[row].length; col++) {
    const cur = trees[row][col];

    let top = row - 1;
    let bot = row + 1;
    let right = col + 1;
    let left = col - 1;
    let t = 0;
    let b = 0;
    let r = 0;
    let l = 0;

    while (top >= 0) {
      t++;
      if (trees[top][col] >= cur) {
        break;
      }
      top--;
    }

    while (bot < trees.length) {
      b++;
      if (trees[bot][col] >= cur) {
        break;
      }
      bot++;
    }

    while (left >= 0) {
      l++;
      if (trees[row][left] >= cur) {
        break;
      }
      left--;
    }

    while (right < trees[row].length) {
      r++;
      if (trees[row][right] >= cur) {
        break;
      }
      right++;
    }

    console.log({ cur, t, b, l, r });

    let total = t * b * l * r;
    if (total > maxValue) {
      maxValue = total;
    }
  }
}

console.log(maxValue);

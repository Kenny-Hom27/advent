import { data } from "./data.js";

const format = data.split(/\r?\n/);

console.log(format);

function findLargest(str) {
  let maxLeft = -1;
  let maxNum = -1;

  for (let ch of str) {
    const digit = Number(ch);

    if (maxLeft !== -1) {
      const candidate = maxLeft * 10 + digit;

      maxNum = Math.max(maxNum, candidate);
    }

    if (digit > maxLeft) {
      maxLeft = digit;
    }
  }

  return maxNum;
}

function calc() {
  let total = 0;

  for (let num of format) {
    total += findLargest(num);
  }

  return total;
}

console.log(calc());

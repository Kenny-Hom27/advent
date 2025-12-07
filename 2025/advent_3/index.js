import { data } from "./data.js";

const format = data.split(/\r?\n/);

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

function maxDigits(str, K) {
  const digits = str.split("").map(Number);
  const stack = [];
  let toRemove = digits.length - K;

  for (let digit of digits) {
    while (stack.length && toRemove > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      toRemove--;
    }

    stack.push(digit);
  }

  return Number(stack.slice(0, K).join(""));
}

function calc2() {
  let total = 0;

  for (let num of format) {
    total += maxDigits(num, 12);
  }

  return total;
}

console.log(calc2());

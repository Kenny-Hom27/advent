import { data } from "./data.js";

const format = data.split(",");

function chunk(str, size) {
  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

function isInvalid(str) {
  for (let i = 1; i < str.length / 2; i++) {
    const arr = chunk(str, i);
    if (arr.every((v) => v === arr[0])) return true;
  }
  return false;
}

function getDivisors(n) {
  const d = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) d.push(i);
  }
  return d;
}

function calc() {
  let total = 0;

  for (const range of format) {
    const [startStr, endStr] = range.split("-");
    const start = Number(startStr);
    const end = Number(endStr);

    const minLen = String(start).length;
    const maxLen = String(end).length;

    for (let len = minLen; len <= maxLen; len++) {
      const divisors = getDivisors(len);

      for (const k of divisors) {
        const patternStart = 10 ** (k - 1);
        const patternEnd = 10 ** k - 1;

        for (let p = patternStart; p <= patternEnd; p++) {
          const block = String(p);
          const repeated = block.repeat(len / k);
          const num = Number(repeated);

          if (num > end) break;
          if (num < start) continue;

          // Final check using your exact function
          if (isInvalid(repeated)) total += num;
        }
      }
    }
  }

  return total;
}

console.log(calc());

import { data } from "./data.js";

const format = data.split(",");

const seen = new Map();

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

    if (arr.every((i) => i === arr[0])) return true;
  }

  return false;
}

function calc() {
  let total = 0;

  for (let range of format) {
    const [startStr, endStr] = range.split("-");
    const start = Number(startStr);
    const end = Number(endStr);

    const minLen = startStr.length;
    const maxLen = endStr.length;

    for (let len = minLen; len <= maxLen; len++) {
      // Only even digit lengths can form repeated halves
      if (len % 2 === 1) continue;

      const half = len / 2;

      const halfStart = 10 ** (half - 1); // smallest half of this length
      const halfEnd = 10 ** half - 1; // largest half of this length

      for (let h = halfStart; h <= halfEnd; h++) {
        const halfStr = h.toString();
        const fullStr = halfStr + halfStr;
        const num = Number(fullStr);

        if (num > end) break; // stop early for speed
        if (num >= start) total += num;
      }
    }
  }

  return total;
}

console.log(calc());

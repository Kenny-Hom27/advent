import { data } from "./data.js";

const format = data.split("\n\n").map((r) => r.split(/\r?\n/));
const ranges = format[0].map((r) => r.split("-").map((n) => Number(n)));
const ids = format[1].map((n) => Number(n));

function buildIntervals(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const res = [ranges[0]];

  for (let i = 1; i < ranges.length; i++) {
    let cur = ranges[i];

    if (cur[0] > res[res.length - 1][1]) {
      res.push(cur);
    } else {
      let pop = res.pop();
      pop = [pop[0], Math.max(pop[1], cur[1])];
      res.push(pop);
    }
  }

  return res;
}
const intervals = buildIntervals(ranges);

function calc() {
  let count = 0;

  for (let id of ids) {
    for (let int of intervals) {
      if (id >= int[0] && id <= int[1]) {
        count++;
        continue;
      }
    }
  }

  return count;
}

function calc2() {
  let count = 0;

  for (let int of intervals) {
    count += int[1] - int[0] + 1;
  }

  return count;
}

console.log(calc2());

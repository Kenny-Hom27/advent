import { data } from "./data.js";

const format = data.split(/\r?\n/);

function calc() {
  let start = 50;
  let count = 0;

  for (let rotation of format) {
    let dir = rotation[0];
    let amount = Number(rotation.slice(1));

    if (dir === "L") {
      start = (start - amount) % 100;
      if (start < 0) start += 100;
    } else {
      start = (start + amount) % 100;
    }

    if (start === 0) count++;
  }

  return count;
}

function calc2() {
  let start = 50;
  let count = 0;

  for (let rotation of format) {
    let dir = rotation[0];
    let amount = Number(rotation.slice(1));

    let tempCount = 0;

    if (dir === "L") {
      start = start - amount;
      if (start < 0) {
        tempCount = Math.ceil(Math.abs(start) / 100);
      }
      start = start % 100;

      if (start < 0) start += 100;
    } else {
      start = start + amount;
      tempCount = Math.floor(start / 100);
      start = start % 100;
    }

    count += tempCount;
  }

  return count;
}

console.log(calc2());

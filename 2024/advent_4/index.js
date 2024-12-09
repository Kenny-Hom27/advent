import { data } from "./data.js";

const format = data.split(/\r?\n/).map((s) => s.split(""));

console.log(format);

const checkForXmas = (i, j) => {
  let count = 0;

  // Helper function to check if index is within bounds
  const inBounds = (x, y) =>
    x >= 0 && y >= 0 && x < format.length && y < format[x].length;

  // LEFT
  if (
    inBounds(i, j - 1) &&
    inBounds(i, j - 2) &&
    inBounds(i, j - 3) &&
    format[i][j - 1] === "M" &&
    format[i][j - 2] === "A" &&
    format[i][j - 3] === "S"
  ) {
    count++;
  }

  // TOP LEFT
  if (
    inBounds(i - 1, j - 1) &&
    inBounds(i - 2, j - 2) &&
    inBounds(i - 3, j - 3) &&
    format[i - 1][j - 1] === "M" &&
    format[i - 2][j - 2] === "A" &&
    format[i - 3][j - 3] === "S"
  ) {
    count++;
  }

  // TOP
  if (
    inBounds(i - 1, j) &&
    inBounds(i - 2, j) &&
    inBounds(i - 3, j) &&
    format[i - 1][j] === "M" &&
    format[i - 2][j] === "A" &&
    format[i - 3][j] === "S"
  ) {
    count++;
  }

  // TOP RIGHT
  if (
    inBounds(i - 1, j + 1) &&
    inBounds(i - 2, j + 2) &&
    inBounds(i - 3, j + 3) &&
    format[i - 1][j + 1] === "M" &&
    format[i - 2][j + 2] === "A" &&
    format[i - 3][j + 3] === "S"
  ) {
    count++;
  }

  // RIGHT
  if (
    inBounds(i, j + 1) &&
    inBounds(i, j + 2) &&
    inBounds(i, j + 3) &&
    format[i][j + 1] === "M" &&
    format[i][j + 2] === "A" &&
    format[i][j + 3] === "S"
  ) {
    count++;
  }

  // BOT RIGHT
  if (
    inBounds(i + 1, j + 1) &&
    inBounds(i + 2, j + 2) &&
    inBounds(i + 3, j + 3) &&
    format[i + 1][j + 1] === "M" &&
    format[i + 2][j + 2] === "A" &&
    format[i + 3][j + 3] === "S"
  ) {
    count++;
  }

  // BOT
  if (
    inBounds(i + 1, j) &&
    inBounds(i + 2, j) &&
    inBounds(i + 3, j) &&
    format[i + 1][j] === "M" &&
    format[i + 2][j] === "A" &&
    format[i + 3][j] === "S"
  ) {
    count++;
  }

  // BOT LEFT
  if (
    inBounds(i + 1, j - 1) &&
    inBounds(i + 2, j - 2) &&
    inBounds(i + 3, j - 3) &&
    format[i + 1][j - 1] === "M" &&
    format[i + 2][j - 2] === "A" &&
    format[i + 3][j - 3] === "S"
  ) {
    count++;
  }

  return count;
};

function calc() {
  let total = 0;

  for (let i = 0; i < format.length; i++) {
    for (let j = 0; j < format[0].length; j++) {
      if (format[i][j] === "X") {
        total += checkForXmas(i, j);
      }
    }
  }

  return total;
}

function calc2() {}

console.log(calc());

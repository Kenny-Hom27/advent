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

const symbols = {
  "%": true,
  $: true,
  "=": true,
  "+": true,
  "*": true,
  "/": true,
  "@": true,
  "-": true,
  "&": true,
  "#": true,
};

function calc() {
  let total = 0;

  for (let i = 0; i < format.length; i++) {
    let hasSymbol = false;
    let num = "";
    for (let j = 0; j < format[i].length; j++) {
      let cur = format[i][j];

      if (num.length && !nums[cur]) {
        if (hasSymbol) {
          total += Number(num);
        }
        hasSymbol = false;
        num = "";
        continue;
      }

      if (nums[cur]) {
        num += cur;

        if (i > 0) {
          const top = i > 0 && format[i - 1][j];
          if (symbols[top]) hasSymbol = true;

          if (j > 0) {
            const topLeft = format[i - 1][j - 1];
            if (symbols[topLeft]) hasSymbol = true;
          }

          if (j < format[i].length - 1) {
            const topRight = format[i - 1][j + 1];
            if (symbols[topRight]) {
              hasSymbol = true;
            }
          }
        }

        if (j > 0) {
          const left = format[i][j - 1];
          if (symbols[left]) hasSymbol = true;
        }

        if (j < format[i].length - 1) {
          const right = format[i][j + 1];
          if (symbols[right]) hasSymbol = true;
        }

        if (i < format.length - 1) {
          const bot = i > 0 && format[i + 1][j];
          if (symbols[bot]) hasSymbol = true;

          if (j > 0) {
            const botLeft = format[i + 1][j - 1];
            if (symbols[botLeft]) hasSymbol = true;
          }

          if (j < format[i].length - 1) {
            const botRight = format[i + 1][j + 1];
            if (symbols[botRight]) hasSymbol = true;
          }
        }
      }
    }

    if (hasSymbol) {
      total += Number(num);
    }
  }

  return total;
}

console.log(calc());

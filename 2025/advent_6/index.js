import { data } from "./data.js";

const format = data
  .split(/\r?\n/)
  .map((line) => line.split(" ").filter((n) => n));

console.log(format);

function math(sign, num1, num2) {
  if (sign === "*") return Number(num1) * Number(num2);

  if (sign === "+") return Number(num1) + Number(num2);
}

function calc() {
  const signs = format[format.length - 1];
  let total = 0;

  for (let i = 1; i < format.length - 1; i++) {
    for (let j = 0; j < format[i].length; j++) {
      format[i][j] = math(signs[j], format[i - 1][j], format[i][j]);
    }
  }

  return format[format.length - 2].reduce((a, b) => a + b);
}

console.log(calc());

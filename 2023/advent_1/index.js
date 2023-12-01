import data from "./data.js";

const format = data.split(/\r?\n/);

// function calc() {
//   let sum = 0;

//   console.log(format[0]);

//   for (let n of format) {
//     let temp = [];

//     for (let i = 0; i < n.length; i++) {
//       if (nums[n[i]]) {
//         temp.push(nums[n[i]]);
//       }
//     }

//     let tempNum = Number(temp[0] + temp[temp.length - 1]);
//     sum += tempNum;
//   }

//   return sum;
// }

function calc2() {
  let sum = 0;

  let nums2 = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero",
  };

  let nums = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
  };

  for (let n of format) {
    let minMap = {};
    let maxMap = {};

    for (let z in nums) {
      if (n.lastIndexOf(z) > -1) {
        maxMap[z] = n.lastIndexOf(z);
      }
    }

    for (let z in nums2) {
      if (n.lastIndexOf(z) > -1) {
        maxMap[z] = n.lastIndexOf(z);
      }
    }

    for (let z in nums) {
      if (n.indexOf(z) > -1) {
        minMap[z] = n.indexOf(z);
      }
    }

    for (let z in nums2) {
      if (n.indexOf(z) > -1) {
        minMap[z] = n.indexOf(z);
      }
    }

    let min;
    let max;
    let minNum;
    let maxNum;
    for (let n in minMap) {
      let cur = minMap[n];
      if (min === undefined) {
        min = cur;
      }
      if (cur <= min) {
        minNum = n;
        min = minMap[n];
      }
    }

    for (let n in maxMap) {
      let cur = maxMap[n];
      if (max === undefined) {
        max = cur;
      }
      if (cur >= max) {
        maxNum = n;
        max = maxMap[n];
      }
    }

    if (nums[minNum]) {
      minNum = nums[minNum];
    }

    if (nums[maxNum]) {
      maxNum = nums[maxNum];
    }

    console.log(minMap, maxMap, minNum, maxNum);

    let tempNum = Number(String(minNum) + String(maxNum));
    sum += tempNum;
  }

  return sum;
}

console.log(calc2());

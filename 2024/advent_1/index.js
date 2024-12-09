import { data } from "./data.js";

const format = data.split(/\r?\n/);

const list1 = [];
const list2 = [];

for (let i = 0; i < format.length; i++) {
  const nums = format[i].split("  ");
  const n1 = Number(nums[0]);
  const n2 = Number(nums[1]);
  list1.push(n1);
  list2.push(n2);
}

function calc() {
  const l1 = quickSort(list1);
  const l2 = quickSort(list2);

  let total = 0;

  for (let i = 0; i < l1.length; i++) {
    total += Math.abs(l1[i] - l2[i]);
  }

  return total;
}

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

function calc2() {
  const map = {};

  for (let i = 0; i < list2.length; i++) {
    const n = list2[i];
    if (map[n]) {
      map[n]++;
    } else {
      map[n] = 1;
    }
  }

  let total = 0;
  for (let i = 0; i < list1.length; i++) {
    const n = list1[i];
    if (map[n]) {
      total += n * map[n];
    }
  }

  return total;
}

console.log(calc2());

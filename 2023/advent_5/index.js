import data from "./data.js";

const format = data.split(/\n\s*\n/);

const seeds = format[0].split(": ")[1].split(" ");

const seedSoil = format[1]
  .split(":")[1]
  .split(/\r?\n/)
  .filter((n) => n)
  .map((n) => n.split(" "));

const soilFert = format[2]
  .split(":")[1]
  .split(/\r?\n/)

  .map((n) => n.split(" "));

const fertWater = format[3]
  .split(":")[1]
  .split(/\r?\n/)
  .filter((n) => n)
  .map((n) => n.split(" "));

const waterLight = format[4]
  .split(":")[1]
  .split(/\r?\n/)
  .filter((n) => n)
  .map((n) => n.split(" "));

const lightTemp = format[5]
  .split(":")[1]
  .split(/\r?\n/)
  .filter((n) => n)
  .map((n) => n.split(" "));

const tempHum = format[6]
  .split(":")[1]
  .split(/\r?\n/)
  .filter((n) => n)
  .map((n) => n.split(" "));

const humLoc = format[7]
  .split(":")[1]
  .split(/\r?\n/)
  .filter((n) => n)
  .map((n) => n.split(" "));

const numMap = {};
const map1 = {};
const map2 = {};
const map3 = {};
const map4 = {};
const map5 = {};
const map6 = {};
const map7 = {};

function calc(num) {
  if (numMap[num]) return numMap[num];
  let savedStart = num;

  const seedStart = num;
  if (map1[seedStart]) return;
  for (let list of seedSoil) {
    const start = Number(list[0]);
    const end = Number(list[1]);
    const range = Number(list[2]);

    if (num < end) continue;

    if (end + range >= num) {
      let diff = num - end;
      num = start + diff;
      break;
    }
  }
  map1[seedStart] = num;

  const soilStart = num;
  if (map2[seedStart]) return;
  for (let list of soilFert) {
    const start = Number(list[0]);
    const end = Number(list[1]);
    const range = Number(list[2]);

    if (num < end) continue;

    if (end + range >= num) {
      let diff = num - end;
      num = start + diff;
      break;
    }
  }
  map2[soilStart] = num;

  const fertStart = num;
  if (map3[fertStart]) return;
  for (let list of fertWater) {
    const start = Number(list[0]);
    const end = Number(list[1]);
    const range = Number(list[2]);

    if (num < end) continue;

    if (end + range >= num) {
      let diff = num - end;
      num = start + diff;
      break;
    }
  }

  map3[fertStart] = num;

  const waterStart = num;
  if (map4[waterStart]) return;
  for (let list of waterLight) {
    const start = Number(list[0]);
    const end = Number(list[1]);
    const range = Number(list[2]);

    if (num < end) continue;

    if (end + range >= num) {
      let diff = num - end;
      num = start + diff;
      break;
    }
  }
  map4[waterStart] = num;

  const lightStart = num;
  if (map5[lightStart]) return;
  for (let list of lightTemp) {
    const start = Number(list[0]);
    const end = Number(list[1]);
    const range = Number(list[2]);

    if (num < end) continue;

    if (end + range >= num) {
      let diff = num - end;
      num = start + diff;
      break;
    }
  }
  map5[lightStart] = num;

  const tempStart = num;
  if (map6[tempStart]) return;
  for (let list of tempHum) {
    const start = Number(list[0]);
    const end = Number(list[1]);
    const range = Number(list[2]);

    if (num < end) continue;

    if (end + range >= num) {
      let diff = num - end;
      num = start + diff;
      break;
    }
  }
  map6[tempStart] = num;

  const humStart = num;
  if (map7[humStart]) return;
  for (let list of humLoc) {
    const start = Number(list[0]);
    const end = Number(list[1]);
    const range = Number(list[2]);

    if (num < end) continue;

    if (end + range >= num) {
      let diff = num - end;
      num = start + diff;
      break;
    }
  }
  map7[humStart] = num;

  numMap[savedStart] = num;

  return num;
}

let min = 100000000000;

// for (let n of seeds) {
//   if (calc(n) < min) {
//     min = calc(n);
//   }
// }
// console.log(min);

const map = {};

for (let i = 0; i < seeds.length; i += 2) {
  let start = Number(seeds[0]);
  let range = Number(seeds[1]);
  const end = start + range - 1;
  console.log(range);

  for (let j = start; j < end; j++) {
    let overlap = Math.min(end, seeds[j].end) - Math.max(start, seeds[j].start);
    if (map[j]) continue;
    const c = calc(j);
    map[j] = c;

    if (c < min) {
      min = c;
    }
  }
}

console.log(part2Min);

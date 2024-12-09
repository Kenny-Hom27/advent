import { data } from "./data.js";

const format = data
  .split(/\r?\n/)
  .map((row) => row.split(" ").map((n) => Number(n)));

function calc() {
  let safeCount = 0;

  for (let i = 0; i < format.length; i++) {
    const row = format[i];
    let safe = true;
    let inc = false;

    if (row[0] < row[row.length - 1]) {
      inc = true;
    }

    for (let j = 0; j < row.length - 1; j++) {
      let n1 = row[j];
      let n2 = row[j + 1];

      const diff = Math.abs(n1 - n2);
      if (diff < 1 || diff > 3) {
        safe = false;
        break;
      }

      if (inc) {
        if (n1 >= n2) {
          safe = false;
        }
      } else {
        if (n2 >= n1) {
          safe = false;
        }
      }
    }

    if (safe) safeCount++;
  }

  return safeCount;
}

function isReportSafe(report) {
  const [first, second] = report;

  let isIncreasing = first < second;
  let isDecreasing = second < first;

  if (!isIncreasing && !isDecreasing) {
    return false;
  }

  for (let i = 0; i < report.length - 1; i++) {
    const current = report[i];
    const next = report[i + 1];

    if (isIncreasing && !(next > current)) {
      return false;
    }

    if (isDecreasing && !(next < current)) {
      return false;
    }

    const diff = Math.abs(current - next);

    if (diff < 1 || diff > 3) {
      return false;
    }
  }

  // If we are here, the report passes!
  return true;
}

function tolerableIsReportSafe(report) {
  if (isReportSafe(report)) {
    return true;
  }

  for (let i = 0; i < report.length; i++) {
    const trimmedReport = report.slice();
    trimmedReport.splice(i, 1);

    if (isReportSafe(trimmedReport)) {
      return true;
    }
  }

  return false;
}

const partOne = format.filter((report) => isReportSafe(report)).length;
console.log("Part One:", partOne);

const partTwo = format.filter((report) => tolerableIsReportSafe(report)).length;
console.log("Part Two:", partTwo);

import { input } from "./inputs.js";

// for (let i = 0; i < input.length; i++) {
//   const a = input[i];
//   const b = input[i + 1];
//   const c = input[i + 2];
//   const d = input[i + 3];

//   const map = { [a]: true, [b]: true, [c]: true, [d]: true };

//   if (Object.keys(map).length === 4) {
//     console.log(i);
//     break;
//   }
// }

for (let i = 0; i < input.length; i++) {
  const str = input.slice(i, i + 14);

  const map = {};
  for (let j = 0; j < str.length; j++) {
    map[str[j]] = true;
  }

  if (Object.keys(map).length === 14) {
    console.log(i + 14);
    break;
  }
}

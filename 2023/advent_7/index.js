import data from "./data.js";
// const data = `32T3K 765
// T55J5 684
// KK677 28
// KTJJT 220
// QQQJA 483`;

const cardsMap = {};

data
  .split(/\r?\n/)
  .map((n) => n.split(" "))
  .map((n) => {
    cardsMap[n[0]] = Number(n[1]);
  });

const cardValue = {
  A: 14,
  K: 13,
  Q: 12,
  J: 1,
  T: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
};

function calculateHand(cardMap, jCount) {
  let max = 0;

  delete cardMap["J"];
  if (Object.keys(cardMap).length === 0) {
    return 5000;
  }

  for (let key in cardMap) {
    if (cardMap[key] > max) max = cardMap[key];
  }

  let maxLetter;
  for (let key in cardMap) {
    if (cardMap[key] === max) maxLetter = key;
  }

  cardMap[maxLetter] += jCount;

  console.log("----", cardMap, jCount);

  let newMax = 0;
  for (let key in cardMap) {
    if (cardMap[key] > newMax) newMax = cardMap[key];
  }

  if (newMax !== 2 && newMax !== 3) return newMax * 1000;

  if (newMax === 3 && Object.keys(cardMap).length === 2) {
    return 3500;
  } else if (newMax === 3) {
    return 3000;
  }

  let count = 0;
  for (let key in cardMap) {
    if (cardMap[key] === 2) count++;
  }

  if (count === 1) {
    return 1500;
  } else {
    return 2000;
  }
}
const valueMap = {
  1000: [],
  1500: [],
  2000: [],
  3000: [],
  3500: [],
  4000: [],
  5000: [],
};

function calc() {
  for (let card in cardsMap) {
    const map = {};

    for (let i = 0; i < card.length; i++) {
      let cur = card[i];
      if (!map[cur]) {
        map[cur] = 0;
      }
      map[cur]++;
    }

    const value = calculateHand(map, map["J"] || 0);
    console.log(card, value);
    valueMap[value].push(card);
  }

  console.log(valueMap);

  for (let cardObj in valueMap) {
    const cardArr = valueMap[cardObj];

    cardArr.sort((a, b) => {
      for (let i = 0; i < a.length; i++) {
        let letterA = a[i];
        let letterB = b[i];
        if (cardValue[letterA] > cardValue[letterB]) {
          return 1;
        } else if (cardValue[letterB] > cardValue[letterA]) {
          return -1;
        }
      }
    });
  }

  let count = 1;
  let total = 0;
  for (let cardObj in valueMap) {
    const cardArr = valueMap[cardObj];

    cardArr.forEach((card) => {
      total += count * cardsMap[card];
      count++;
    });
  }

  return total;
}

console.log(calc());

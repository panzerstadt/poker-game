import { Card, mapping } from "./stuff";

export const getHighest = (cards: Card[]): Card[] => {
  return [getSorted(cards).reverse()[0]];
};

export const getSorted = (cards: Card[]): Card[] => {
  // @ts-ignore
  return [...cards].sort((a, b) => mapping[a.hand] - mapping[b.hand]);
};

// https://stackoverflow.com/questions/54954713/check-if-the-digits-in-the-number-are-in-increasing-sequence-in-python
export const isStraight = (cards: Card[]) => {
  // @ts-ignore
  const sorted = getSorted(cards).map((c) => mapping[c.hand]);
  if ("234567891011121314".includes(String(sorted.join("")))) {
    return true;
  }
  return false;
};

export const isFlush = (cards: Card[]) => {
  return new Set(cards.map((c) => c.types)).size === 1;
};

export const getPairs = (cards: Card[]) => {
  const sorted = getSorted(cards);
  let pairs_count = 0;
  let valid = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].hand === sorted[i - 1]?.hand) {
      pairs_count++;
      valid.push(sorted[i]);
      valid.push(sorted[i - 1]);
    }
  }
  return { pairs: pairs_count, valid };
};

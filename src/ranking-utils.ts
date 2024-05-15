import { given } from 'flooent';
import {
  Card,
  HAND_RANK,
  handScoreMapping,
  mapping,
  validCardScoresMapping,
} from './stuff';

export const getHighest = (cards: Card[]): Card[] => {
  return [getSorted(cards).reverse()[0]];
};

export const getSorted = (cards: Card[]): Card[] => {
  // @ts-ignore
  return [...cards].sort((a, b) => mapping[a.hand] - mapping[b.hand]);
};

// https://stackoverflow.com/questions/54954713/check-if-the-digits-in-the-number-are-in-increasing-sequence-in-python
export const isStraight = (cards: Card[]) => {
  if (cards.length !== 5) return false;
  // @ts-ignore
  const sorted = getSorted(cards).map((c) => mapping[c.hand]);
  if ('234567891011121314'.includes(String(sorted.join('')))) {
    return true;
  }
  return false;
};

export const isFlush = (cards: Card[]) => {
  if (cards.length !== 5) return false;
  return new Set(cards.map((c) => c.types)).size === 1;
};

export const getSimilar = (cards: Card[]) => {
  const grouped = given.array(cards).groupBy('hand');

  let valid: Card[] = [];
  let quads = 0;
  let triplets = 0;
  let pairs = 0;
  grouped.entries().forEach(([key, arr]) => {
    if (arr.length === 4) {
      quads++;
      valid = [...arr];
    }
    if (arr.length === 3) {
      triplets++;
      valid = [...arr];
    }
    if (arr.length === 2) {
      pairs++;
      valid = valid.concat([...arr]);
    }
  });

  return { pairs, triplets, quads, valid };
};

export const getScore = (cards: Card[], handRank: HAND_RANK) => {
  // @ts-ignore
  return cards.map((c) => validCardScoresMapping[c.hand]).reduce((a, b) => a + b) + handScoreMapping[handRank]; // prettier-ignore
};

export interface Card {
  types: 'clubs' | 'diamonds' | 'hearts' | 'spades';
  hand: string;
}

export enum HAND_RANK {
  SFLUSH = 'Straight Flush',
  FKIND = 'Four of a Kind',
  FHOUSE = 'Full House',
  FLUSH = 'Flush',
  STRAIGHT = 'Straight',
  THREE = 'Three of a Kind',
  TWO = 'Two Pair',
  PAIR = 'Pair',
  HIGH = 'High',
}

export const mapping = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

export const validCardScoresMapping = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 10,
};

export const handScoreMapping = {
  [HAND_RANK.SFLUSH]: 100,
  [HAND_RANK.FKIND]: 70,
  [HAND_RANK.FHOUSE]: 60,
  [HAND_RANK.FLUSH]: 50,
  [HAND_RANK.STRAIGHT]: 40,
  [HAND_RANK.THREE]: 30,
  [HAND_RANK.TWO]: 20,
  [HAND_RANK.PAIR]: 10,
  [HAND_RANK.HIGH]: 0,
};

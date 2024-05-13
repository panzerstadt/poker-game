import { getHighest, getSimilar } from './ranking-utils';
import { isStraight } from './ranking-utils';
import { isFlush } from './ranking-utils';
import { Card } from './stuff';

export const calculate = (cards: Card[]) => {
  if (cards.length !== 5) {
    throw new Error('we expect 5 cards in hand');
  }
  const pairsChk = getSimilar(cards);

  // 5 cards
  if (isFlush(cards) && isStraight(cards)) {
    // royal flush = flush and highest possible straight <-- skip for now
    // straight flush = flush and straight
    return { handRank: 'Straight Flush', cards: cards };
  }
  // 4
  if (pairsChk.quads === 1) {
    return { handRank: 'Four of a Kind', cards: pairsChk.valid };
  }
  // 5
  if (pairsChk.triplets === 1 && pairsChk.pairs === 1) {
    return { handRank: 'Full House', cards: pairsChk.valid };
  }
  if (isFlush(cards)) {
    return { handRank: 'Flush', cards: cards };
  }
  if (isStraight(cards)) {
    return { handRank: 'Straight', cards: cards };
  }
  if (pairsChk.triplets === 1) {
    return { handRank: 'Three of a Kind', cards: pairsChk.valid };
  }
  if (pairsChk.pairs === 2) {
    return { handRank: 'Two Pair', cards: pairsChk.valid };
  }

  if (pairsChk.pairs === 1) {
    return { handRank: 'Pair', cards: pairsChk.valid };
  }

  // 1 card
  return { handRank: 'High', cards: getHighest(cards) };
};

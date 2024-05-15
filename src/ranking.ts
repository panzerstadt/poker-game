import { getHighest, getScore, getSimilar } from './ranking-utils';
import { isStraight } from './ranking-utils';
import { isFlush } from './ranking-utils';
import { Card, HAND_RANK } from './stuff';

export const calculate = (cards: Card[]) => {
  const pairsChk = getSimilar(cards);

  // 5 cards
  if (isFlush(cards) && isStraight(cards)) {
    // royal flush = flush and highest possible straight <-- skip for now
    // straight flush = flush and straight
    return {
      handRank: HAND_RANK.SFLUSH,
      cards: cards,
      score: getScore(cards, HAND_RANK.SFLUSH),
    };
  }
  // 4
  if (pairsChk.quads === 1) {
    return {
      handRank: HAND_RANK.FKIND,
      cards: pairsChk.valid,
      score: getScore(pairsChk.valid, HAND_RANK.FKIND),
    };
  }
  // 5
  if (pairsChk.triplets === 1 && pairsChk.pairs === 1) {
    return {
      handRank: HAND_RANK.FHOUSE,
      cards: pairsChk.valid,
      score: getScore(cards, HAND_RANK.FHOUSE),
    };
  }
  if (isFlush(cards)) {
    return {
      handRank: HAND_RANK.FLUSH,
      cards: cards,
      score: getScore(cards, HAND_RANK.FLUSH),
    };
  }
  if (isStraight(cards)) {
    return {
      handRank: HAND_RANK.STRAIGHT,
      cards: cards,
      score: getScore(cards, HAND_RANK.STRAIGHT),
    };
  }
  if (pairsChk.triplets === 1) {
    return {
      handRank: HAND_RANK.THREE,
      cards: pairsChk.valid,
      score: getScore(pairsChk.valid, HAND_RANK.THREE),
    };
  }
  if (pairsChk.pairs === 2) {
    return {
      handRank: HAND_RANK.TWO,
      cards: pairsChk.valid,
      score: getScore(pairsChk.valid, HAND_RANK.TWO),
    };
  }

  if (pairsChk.pairs === 1) {
    return {
      handRank: HAND_RANK.PAIR,
      cards: pairsChk.valid,
      score: getScore(pairsChk.valid, HAND_RANK.PAIR),
    };
  }

  // 1 card
  const highest = getHighest(cards);
  return {
    handRank: HAND_RANK.HIGH,
    cards: highest,
    score: getScore(highest, HAND_RANK.HIGH),
  };
};

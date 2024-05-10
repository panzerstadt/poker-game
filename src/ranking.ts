import { getHighest, getPairs } from "./ranking-utils";
import { isStraight } from "./ranking-utils";
import { isFlush } from "./ranking-utils";
import { Card } from "./stuff";

export const calculate = (cards: Card[]) => {
  if (cards.length !== 5) {
    throw new Error("we expect 5 cards in hand");
  }

  // 5 cards
  if (isFlush(cards) && isStraight(cards)) {
    return { handRank: "Royal Flush", cards: cards };
  }

  if (isFlush(cards)) {
    return { handRank: "Flush", cards: cards };
  }

  if (isStraight(cards)) {
    return { handRank: "Straight", cards: cards };
  }

  // 2-4 cards
  const pairsChk = getPairs(cards);
  if (pairsChk.pairs === 2) {
    return { handRank: "Two Pair", cards: pairsChk.valid };
  }

  if (pairsChk.pairs === 1) {
    return { handRank: "Pair", cards: pairsChk.valid };
  }

  // 1 card
  return { handRank: "High", cards: getHighest(cards) };
};

import { calculate } from './ranking';
// TODO: also consider edge cases: in this version of poker, you don't have to play all five cards,
// you can also just play 2 or 4. Is your flush check still working?
// add a test to verify your flush doesnt work if you only play four cards
// but pair, etc. should work

describe('ranking calculation', () => {
  it('identifies and scores Straight Flush', () => {
    const { handRank, cards, score } = calculate([
      { types: 'clubs', hand: '9' },
      { types: 'clubs', hand: '8' },
      { types: 'clubs', hand: '7' },
      { types: 'clubs', hand: '6' },
      { types: 'clubs', hand: '5' },
    ]);

    expect(handRank).toBe('Straight Flush');
    expect(cards.length).toBe(5);
    expect(score).toBe(135); // straight flush = 100 + 5 + 6 + 7 + 8 + 9
  });
  it('identifies and scores Four of a Kind', () => {
    const { handRank, cards, score } = calculate([
      { types: 'hearts', hand: 'Q' },
      { types: 'clubs', hand: 'Q' },
      { types: 'diamonds', hand: 'Q' },
      { types: 'spades', hand: 'Q' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Four of a Kind');
    expect(cards.length).toBe(4);
    expect(score).toBe(110); // four = 70 + 10 + 10 + 10 + 10
  });
  it('identifies and scores Full House', () => {
    const { handRank, cards, score } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'diamonds', hand: 'K' },
      { types: 'spades', hand: 'K' },
      { types: 'diamonds', hand: '10' },
      { types: 'clubs', hand: '10' },
    ]);

    expect(handRank).toBe('Full House');
    expect(cards.length).toBe(5);
    expect(score).toBe(110); // full house = 60 + 10 + 10 + 10 + 10 + 10
  });
  it('identifies and scores Flush', () => {
    const { handRank, cards, score } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'clubs', hand: '2' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Flush');
    expect(cards.length).toBe(5);
    expect(score).toBe(91); // flush = 50 + 10 + 10 + 2 + 10 + 9
  });
  it('identifies and scores Straight', () => {
    const { handRank, cards, score } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: 'J' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Straight');
    expect(cards.length).toBe(5);
    expect(score).toBe(89); // stright = 40 + 10 + 10 + 10 + 10 + 9
  });
  it('identifies and scores Three of a Kind', () => {
    const { handRank, cards, score } = calculate([
      { types: 'hearts', hand: '3' },
      { types: 'clubs', hand: '3' },
      { types: 'spades', hand: '10' },
      { types: 'clubs', hand: '3' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Three of a Kind');
    expect(cards.length).toBe(3);
    expect(score).toBe(39); // three = 30 + 3 + 3 + 3
  });
  it('identifies and scores Two Pair', () => {
    const { handRank, cards, score } = calculate([
      { types: 'hearts', hand: 'Q' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: '10' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Two Pair');
    expect(cards.length).toBe(4);
    expect(score).toBe(60); // two pair = 20 + 10 + 10 + 10 + 10
  });
  it('identifies and scores Pair', () => {
    const { handRank, cards, score } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: '10' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Pair');
    expect(cards.length).toBe(2);
    expect(score).toBe(30); // pair = 10 + 10 + 10
  });
  it('identifies and scores High', () => {
    const { handRank, cards, score } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: '3' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('High');
    expect(cards.length).toBe(1);
    expect(score).toBe(10); // high = 0 + 10
  });
});

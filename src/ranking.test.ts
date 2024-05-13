import { calculate } from './ranking';

describe('ranking calculation', () => {
  it('identifies Straight Flush', () => {
    const { handRank, cards } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'clubs', hand: 'J' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Straight Flush');
    expect(cards.length).toBe(5);
  });
  it('identifies Four of a Kind', () => {
    const { handRank, cards } = calculate([
      { types: 'hearts', hand: 'Q' },
      { types: 'clubs', hand: 'Q' },
      { types: 'diamonds', hand: 'Q' },
      { types: 'spades', hand: 'Q' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Four of a Kind');
    expect(cards.length).toBe(4);
  });
  it('identifies Full House', () => {
    const { handRank, cards } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'diamonds', hand: 'K' },
      { types: 'spades', hand: 'K' },
      { types: 'diamonds', hand: '10' },
      { types: 'clubs', hand: '10' },
    ]);

    expect(handRank).toBe('Full House');
    expect(cards.length).toBe(5);
  });
  it('identifies Flush', () => {
    const { handRank, cards } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'clubs', hand: '2' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Flush');
    expect(cards.length).toBe(5);
  });
  it('identifies Straight', () => {
    const { handRank, cards } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: 'J' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Straight');
    expect(cards.length).toBe(5);
  });
  it('identifies Three of a Kind', () => {
    const { handRank, cards } = calculate([
      { types: 'hearts', hand: 'Q' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: '10' },
      { types: 'clubs', hand: 'Q' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Three of a Kind');
    expect(cards.length).toBe(3);
  });
  it('identifies Two Pair', () => {
    const { handRank, cards } = calculate([
      { types: 'hearts', hand: 'Q' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: '10' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Two Pair');
    expect(cards.length).toBe(4);
  });
  it('identifies Pair', () => {
    const { handRank, cards } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: '10' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Pair');
    expect(cards.length).toBe(2);
  });
  it('identifies High', () => {
    const { handRank, cards } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'spades', hand: '3' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('High');
    expect(cards.length).toBe(1);
  });
});

import { calculate } from './ranking';

describe('ranking calculation', () => {
  it('identifies Royal Flush', () => {
    const { handRank, cards } = calculate([
      { types: 'clubs', hand: 'K' },
      { types: 'clubs', hand: 'Q' },
      { types: 'clubs', hand: 'J' },
      { types: 'clubs', hand: '10' },
      { types: 'clubs', hand: '9' },
    ]);

    expect(handRank).toBe('Royal Flush');
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

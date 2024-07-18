### tasks

1. categorize classifiers -> DONE

- card modifiers (priority 0)
- rule modifiers (priority 1) -> changing rules
- score modifiers (priority 2) -> modifying scores
  - card scores
  - hand scores

2. data structure -> how are we storing the game state / variables
3. classifier ordering -> DONE

### tasks

- from AS IS to modifier support

-

### legends

- modifiers change card behaviour
- classifiers change rules of the system

### notes

classifiers:

- every face card (jack, queen, king) gives 30 extra points
- face cards count as spades
- spades give extra 10 points
- hearts and diamonds count as the same suit, spades and clubs count as the same suit
- you can have a straight/flush with only 4 cards
- you can have gaps of 1 in your straights
- you score 20 extra points if you play fewer than 4 cards
- for every time you played this poker hand (pair, twoPair, etc.) get +2 chips
  - first time you play a pair you get +2, second time +4, third time +6, etc.
- all played cards count in scoring even though they are invalid
- make your own classifier

there are different groups of classifiers!

- e.g. by ranking or by when the action appears

classifiers = [class1, class2, class3] -> user can pick the order
You can have multiple classifiers, for ex:

- hearts and diamonds count as the same suit, spades and clubs count as the same suit
- you can have a straight/flush with only 4 cards
- you can have gaps of 1 in your straights
  H2 D3 D5 H7 is a straight flush

ideas:

- e.g. add flush score to any card
- have a bucket that keeps track of the score
- composition (base properties and allow overwriting)
- look into design patterns, e.g. middleware - "plug"
- standardize inputs and outputs to share tests
- testing factory
- oop vs functional vs mix vs procedural

### types of classifiers

- card modifiers (priority 0)
- rule modifiers (priority 1) -> changing rules
- score modifiers (priority 2) -> modifying scores
  - card scores
  - hand scores

what if multiple classifiers work in tandem

```js
// with card modifiers
[
  // card
  "face cards count as spades",  // [8 club,null,10 spade,J spade,Q spade]
  "hearts and diamonds count as the same suit, spades and clubs count as the same suit" // [8 cs,null,10 cs,J cs,Q cs]
  // rule
  "you can have gaps of 1 in your straights", // [8 cs,null,10 cs,J cs,Q cs]
  "you can have a straight/flush with only 4 cards", // flush = true
] // returns straight flush

// combined
[
  "you can have gaps of 1 in your straights", // [8 club,JOKER,10 spade,J heart,Q diamond]
  "you can have a straight/flush with only 4 cards", // flush = true
  "face cards count as spades",  // [8 club,JOKER,10 spade,J spade,Q spade]
  "hearts and diamonds count as the same suit, spades and clubs count as the same suit" // [8 cs,JOKER,10 cs,J cs,Q cs]
] // returns straight flush

// last two swapped (combined)
[
  "you can have gaps of 1 in your straights", // [8 club,JOKER,10 spade,J heart,Q diamond]
  "you can have a straight/flush with only 4 cards", // flush = true
  "hearts and diamonds count as the same suit, spades and clubs count as the same suit" // [8 cs,JOKER,10 cs,J hd,Q hd]
  "face cards count as spades",  // [8 cs,JOKER,10 cs,J cs,Q cs]
] // returns straight flush

hand: [8 club,null,10 spade,J heart,Q diamond] -> straight flush
```

### categorization

classifiers (these are run after the cards are already played):

- score: every face card (jack, queen, king) gives 30 extra points
- rule : face cards count as spades
- score: spades give extra 10 points
- rule : hearts and diamonds count as the same suit, spades and clubs count as the same suit
- rule : you can have a straight/flush with only 4 cards
- rule : you can have gaps of 1 in your straights
- score: you score 20 extra points if you play fewer than 4 cards
- score: for every time you played this poker hand (pair, twoPair, etc.) get +2 points
  - first time you play a pair you get +2, second time +4, third time +6, etc.
- rule : all played cards count in scoring even though they are (not part of a hand)
- xxxx : make your own classifier

there are different groups of classifiers!

- e.g. by ranking or by when the action appears

classifier groups

### at this point, we already have all the card played, and we are in the calculation phase

- before you start iterating through the hand (preprocess)
  - validation
  - apply rule classifiers
- CALCULATION
- after (postprocess)
  - apply score classifiers

## steps

1. play cards
2. calculate with classifiers
3. return score

we have poker functions (base rules)
classifiers change the poker functions

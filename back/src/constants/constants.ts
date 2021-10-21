export const VALUES = {
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
};

export const SUITS: string[] = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

export const COMBINATIONS = [
  'royal flush',
  'straight flush',
  'four of a kind',
  'full house',
  'flush',
  'straight',
  'three of a kind',
  'two pair',
  'pair',
  'high card'
];

export const SUPER_SECRET_CODE = 'aze';

export const playerActions = {
  any: ['fold', 'call', 'raise'],
  raise: ['call', 'raise'],
};

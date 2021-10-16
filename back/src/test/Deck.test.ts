import { Deck } from '../model/Deck';

describe('Deck', () => {
  test('Deck should be instantiated', () => {
    expect(new Deck()).toBeInstanceOf(Deck);
  });

  test('Deck should be returned', () => {
    const newDeck = new Deck();

    newDeck.createDeck();

    const createdDeck = newDeck.deck;

    expect(newDeck.getDeck()).toEqual(createdDeck);
  });
});

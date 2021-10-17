import { Card } from "../model/Card";
import { Dealer } from "../model/Dealer";
import { Deck } from "../model/Deck";
import { ICard } from "../types/types";

describe('Dealer', () => {
  test('Dealer should be instantiated', () => {
    expect(new Dealer()).toBeInstanceOf(Dealer);
  });

  test('Dealer should create a deck containing Card objects', () => {
    const dealer = new Dealer();

    const dealerCards = dealer.deck.every((card: ICard) => card instanceof Card);

    expect(dealerCards).toEqual(true);
  });

  test('Dealer should create a deck containing 52 Card objects', () => {
    const dealer = new Dealer();
    const deck = new Deck();

    expect(dealer.deck.length).toEqual(deck.deck.length);
  });

  test('Dealer should deal a card', () => {
    const dealer = new Dealer();

    const res = dealer.dealCard();

    expect(res).toBeInstanceOf(Card);
  });

  test('Dealer should deal 4 cards', () => {
    const dealer = new Dealer();

    const res = dealer.dealAmountOfCards(4);

    expect(res.length).toEqual(4);
  });
});

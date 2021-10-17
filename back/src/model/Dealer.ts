/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SUITS, VALUES } from '../constants/cardValues';
import { Card } from './Card';

export class Dealer {
  public dealtCards: Card[];

  public deck: Card[];

  constructor() {
    this.deck = [];

    this.createDeck();

    this.dealtCards = [];
  }

  /**
   * @description creates a new deck of cards
   */
  createDeck(): void {
    const newDeck: Card[] = [];

    SUITS.forEach((suit) => {
      Object.entries(VALUES).forEach((value) => {
        newDeck.push(new Card(value[1], suit));
      });
    });

    this.deck = newDeck;
  }

  /**
   * @description Shuffles the current deck into a random order
   * @returns {Card[]} array of cards
   */
  shuffleDeck(): any[] {
    for (let i = this.deck.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
    return this.deck;
  }

  /**
   * @description Removes the last card from the deck, puts it into the dealtCards array and returns the same card
   * @returns {Card} returns one card from the deck
   */
  dealCard(): Card {
    const dealtCard: Card = this.deck.pop()!;
    this.dealtCards.push(dealtCard);
    return dealtCard;
  }

  /**
   * @description calls the function dealCard for a given amount of times
   * @returns {Card[]} returns array of cards from the deck
   */
  dealAmountOfCards(amount: number): Card[] {
    const newHand = [];
    for (let i = 0; i < amount; i += 1) {
      newHand.push(this.dealCard());
    }
    return newHand;
  }
}

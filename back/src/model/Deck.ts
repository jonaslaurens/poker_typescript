import { SUITS, VALUES } from '../constants/cardValues';
import { Card } from './Card';

export class Deck {
  public deck: Card[];

  constructor() {
    this.deck = [];
    this.createDeck();
  }

  /**
   *
   * @returns {Card[]} Array of Cards
   */
  getDeck(): Card[] {
    return this.deck;
  }

  /**
   * @description creates a new deck of cards
   */
  createDeck() {
    SUITS.forEach((suit) => {
      Object.entries(VALUES).forEach((value) => {
        const newCard = new Card(value[1], suit);
        this.deck.push(newCard);
      });
    });
  }
}

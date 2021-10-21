import { SUITS, VALUES } from '../constants/constants';
import { ICard } from '../types/types';
import { Card } from './Card';

export class Deck {
  public deck: ICard[];

  constructor() {
    this.deck = [];
    this.createDeck();
  }

  /**
   *
   * @returns {Card[]} Array of Cards
   */
  getDeck(): ICard[] {
    return this.deck;
  }

  /**
   * @description creates a new deck of cards
   */
  createDeck(): void {
    SUITS.forEach((suit) => {
      Object.entries(VALUES).forEach((value) => {
        const newCard = new Card(value[1], suit);
        this.deck.push(newCard);
      });
    });
  }
}

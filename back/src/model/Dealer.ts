/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { SUITS, VALUES } from '../constants/cardValues';
import { ICard } from '../types/types';
import { Card } from './Card';

export class Dealer {
  public deck: any;

  public dealtCards: ICard[];

  constructor() {
    this.createDeck();

    this.dealtCards = [];
  }

  /**
   * @description creates a new deck of cards
   */
  createDeck(): void {
    const newDeck: any[] = [];

    SUITS.forEach((suit) => {
      Object.entries(VALUES).forEach((value) => {
        newDeck.push(new Card(value[1], suit));
      });
    });

    console.log(newDeck);

    this.deck = newDeck;
  }

  /**
   * @description Shuffles the current deck into a random order
   * @returns {ICard[]} array of cards
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
   * @returns {ICard} returns one card from the deck
   */
  dealCard(): ICard {
    const dealtCard = this.deck.pop();
    this.dealtCards.push(dealtCard);
    return dealtCard;
  }

  /**
   * @description calls the function dealCard for a given amount of times
   * @returns {ICard[]} returns array of cards from the deck
   */
  dealAmountOfCards(amount: number): ICard[] {
    const newHand = [];
    for (let i = 0; i < amount; i += 1) {
      newHand.push(this.dealCard());
    }
    return newHand;
  }
}

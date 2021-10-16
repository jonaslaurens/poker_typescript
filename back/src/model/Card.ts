/**
 * Represents a playing card
 * @param newValue the value of the playing card
 * @param newSuit the suit of the playing card
 */
export class Card {
  public value: number;

  public suit: string;

  constructor(newValue: number, newSuit: string) {
    this.value = newValue;

    this.suit = newSuit;
  }
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ICard } from '../types/types';
import generateID from '../utils/generateID';

/**
 * @classdesc represents a player
 * @property { string } name the name of the player
 * @property { string } id the id of the player
 * @property { string } socket websocket of the player
 * @property { number } credits the total credits of the player
 * @property { number } bet the current bet of the player
 */
export class Player {
  public name: string;

  private id: string;

  public socket: any;

  public credits: number;

  public bet: number;

  public cards: ICard[];

  /**
   * @param { string } name the name of the player
   * @param { object } socket the websocket of the player
   */
  constructor(name: string, socket: any) {
    this.name = name;
    this.id = generateID();
    this.socket = socket;
    this.credits = 0;
    this.bet = 0;
    this.cards = [];
  }

  /**
   * @description returns the name of the player
   * @returns { string } name of the player
   */
  getName(): string {
    return this.name;
  }

  /**
   * @param name string name of the player
   * @returns {string} name of the player
   */
  setName(name: string): string {
    return (this.name = name);
  }

  /**
   * @returns the id of the player
   */
  getPlayerID(): string {
    return this.id;
  }

  /**
   * @returns the current cards of the player
   */
  getCards(): ICard[] {
    return this.cards;
  }

  /**
   * @returns a workable player object
   */
  toObject(): { name: string; id: string; credits: number } {
    return {
      name: this.name,
      id: this.id,
      credits: this.credits,
    };
  }
}

import { handleDecider } from "../actions/handleDecider";
import { ICard, instanceOfIPlayer, IPlayer, IPlayerObject, ITableObject } from "../types/types";
import generateID from "../utils/generateID";
import { Player } from "./Player";

export class Table {

  id: string;

  players: IPlayer[];

  gameStarted: boolean;

  currentRound?: null;

  playerLimit: number;

  highestHand: ICard[];

  previousStarter: number;

  grandWinner?: IPlayerObject;

  constructor(playerLimit: number) {

    this.id = generateID();

    this.players = [];

    this.gameStarted = false;

    this.playerLimit = playerLimit;

    this.previousStarter = 0;

    this.highestHand = [];
  }

  hasAvailableSpots(): boolean {

    return this.players.length < this.playerLimit;

  }

  checkPlayerCredits() {
    return this.players.filter((player) => player.credits !== 0);
  }

  // returns the current round
  getRound() {
    return this.currentRound;
  }

  // returns the highest hand of the table
  getHighHand() {
    if (!this.highestHand) {
      return false;
    }
    return this.highestHand;
  }

  // sets the highest hand of the table
  setHighHand(hand: ICard) {
    this.highestHand?.push(hand);
  }

  /*
    Add players to table
    */
  addPlayer(player: IPlayer) {
    if (!(instanceOfIPlayer(player))) {
      throw new TypeError('This is not a valid player');
    }

    if (!this.hasAvailableSpots()) {
      throw new TypeError('There is no more room at the table');
    }

    // give player 1000 starting credits
    player.credits = 1000;

    this.players.push(player);
  }

  getSockets() {
    return this.players.map((player) => player.socket);
  }

  // start game when there are playerlimit is reached
  startGame(): void {
    // start new round with current players
    this.currentRound = new Round(
      this.checkPlayerCredits(),
      this.previousStarter,
      this.id
    );

    // handle previous starter so we allways have a new first decider
    this.previousStarter = handleDecider(
      this.previousStarter,
      this.players.length
    );
  }

  broadcast(): void {
    this.players.forEach((player) => {
      const data = {
        type: 'newPlayerAdded',
        table: {
          id: this.id,
          players: this.players
            .filter((currentPlayer) => currentPlayer.id !== player.id)
            .map((player) => {
              return {
                name: player.name,
                id: player.id,
                credits: player.credits,
              };
            }),
        },
      };
      player.socket.emit('broadcast', data);
    });
  }

  toObject(playerId: string): ITableObject {
    if (this.players.length === 1) {
      return {
        id: this.id,
        players: [this.players[0]]
      };
    }

    return {
      id: this.id,
      players: this.players
        .filter((player) => player.id !== playerId)
        .map((player) => {
          return {
            name: player.name,
            id: player.id,
            credits: player.credits,
          };
        }),
    };
  }

}
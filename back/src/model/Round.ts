import { ICard, IDealer, IPlayer } from "../types/types";

const Dealer = require('../dealer/Dealer');
const { any } = require('../../Constants/playerActions');
const handleDecider = require('../../Helpers/handleDecider');

class Round {

    players: IPlayer[];

    // holds our dealer
    dealer: IDealer;

    // community cards
    communityCards: ICard[];

    // holds the pot
    pot: number;

    // check if the round is running
    roundStarted: boolean;

    // hold the current decider
    currentDecider: number;

    // holds minimum bet
    bigBlind: number;

    // hold the current bet, if there is a call this will be added to pot
    currentBet: number;

    // hold big blind (player id)
    currentBigBlind: string;

    // holds the players bets
    playerBets: number[];

    // id of the table
    tableId: string;

  constructor(players: IPlayer[], decider: number, tableId: string) {
    this.players = players;

    this.dealer = new Dealer();

    this.communityCards = [];

    this.pot = 0;

    this.roundStarted = false;

    this.currentDecider = decider;

    this.bigBlind = 50;

    this.currentBet = 0;

    this.currentBigBlind = '';

    this.playerBets = [];

    this.tableId = tableId;

    // initiates a round
    this.initRound();
  }

  // initiates the round dealing cards to all players and community cards
  initRound() {
    // deal 2 cards for each player
    this.players.forEach((player) => {
      const handCards = this.dealer.dealAmountOfCards(2);
      // store player cards on player object
      player.cards = handCards;
      // send player card to players socket
      player.socket.emit('handCards', handCards);
    });

    // deal communitycards
    this.communityCards = this.dealer.dealAmountOfCards(5);

    // send community cards to all players
    this.players.forEach((player) => {
      player.socket.emit('broadcast', {
        type: 'communityCards',
        cards: this.communityCards,
        message: 'round starting',
      });
    });

    this.handleBigBlind();

    this.sendCredits();

    this.askDecision();
  }

  // checks if all bets are equal
  equalBets() {
    return this.playerBets.every((val, i, arr) => val === arr[0]);
  }

  addToPot(amount: number) {
    this.pot += amount;
  }

  // returns all active players
  getActivePlayers() {
    return this.players;
  }

  // returns the communityCards
  getCommunityCards() {
    return this.communityCards;
  }

  hasBets() {
    return this.playerBets.length > 0;
  }

  getHighestBet() {
    return this.playerBets.reduce((a, b) => {
      return Math.max(a, b);
    });
  }

  handleBigBlind() {
    if (this.currentDecider === this.players.length - 1) {
      this.players[0].credits -= this.bigBlind;
      this.currentBigBlind = this.players[0].id;
    } else {
      this.players[this.players.length - 1].credits -= this.bigBlind;
      this.currentBigBlind = this.players[this.players.length - 1].id;
    }
    this.pot += this.bigBlind;
  }

  isBigBlind(playerId: string) {
    return playerId === this.currentBigBlind;
  }

  broadcast() {
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

  getPlayerCredits() {
    return this.players.map((player) => {
      return {
        id: player.id,
        credits: player.credits,
      };
    });
  }

  // sends an object to each connected player containing his credits, the pot and all other players credits
  sendCredits() {
    this.players.forEach((player) => {
      const credits = {
        playerCredits: player.credits,
        pot: this.pot,
        tablePlayerCredits: this.getPlayerCredits(),
      };

      player.socket.emit('credits', credits);
    });
  }

  // handles the current decider. Will increment if previous made decision or
  // back to 0 if everyone decided.
  handleCurrentDecider() {
    this.currentDecider = handleDecider(
      this.currentDecider,
      this.players.length
    );
    return;
  }

  // handles the emit to the current decider
  askDecision() {
    const currentPlayer = this.players[this.currentDecider];

    currentPlayer.socket.emit('decision', {
      actions: any,
      message: 'your turn!',
    });
  }

  // checks if we have a possible end game
  checkEndGame() {
    if (this.players.length === 1) {
      return true;
    }

    // check for allin player set his bet to the highest
    this.players.forEach((player, index) => {
      if (player.hasOwnProperty('allIn')) {
        if (player.allIn) {
          const highestBet = this.getHighestBet();
          this.playerBets[index] = highestBet;
        }
      }
    });

    // if bets are all the same
    // the betarr length is the same as the players left (not folded)
    // and the playerbets does not include an undefined
    // we reached the end game
    if (
      this.equalBets() &&
      this.playerBets.length === this.players.length &&
      !this.playerBets.includes(undefined)
    ) {
      return true;
    }

    return false;
  }
}

module.exports = Round;

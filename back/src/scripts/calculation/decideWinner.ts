import { ICard, IPlayerObject, IWinner } from "../../types/types";
import { groupCards } from "../combinations/groupCards";
import { checkCombination } from "./checkcombination";


/**
 * @description calculates which player in the players param won
 * @param players All player objects who are still in the game and await a result
 * @param communityCards array of cards from the table i.e. the community cards
 * @returns object containing name, cards and result of the winner
 */
export const decideWinner = (players: IPlayerObject[], communityCards: ICard[]): IWinner => {
  const calculatedHands: IPlayerObject[] = [];
  let winner: any = {};

  players.forEach((player: IPlayerObject) => {
    const groupedCards = groupCards(player.cards, communityCards);
    const result = checkCombination(groupedCards);

    calculatedHands.push({ ...player, result });
  });

  winner = calculatedHands[0];

  calculatedHands.forEach((player: IPlayerObject) => {
    if(player.result !== undefined) {
      return player.result.value > winner.result.value ? (winner = player) : null
    }
  }
  );

  return winner;
};

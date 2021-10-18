import { ICard, IPlayer, IPlayerObject } from "../../types/types";
import { groupCards } from "../combinations/groupCards";
import { checkCombination } from "./checkcombination";

export const decideWinner = (players: IPlayerObject[], communityCards: ICard[]) => {
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

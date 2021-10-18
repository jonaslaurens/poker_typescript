import { ICard } from "../../types/types";
import { sortArray } from "./sortArray";
import { validateParams } from "./validateParams";

/**
 * @description combines the cards of the player and the community cards to 1 array needs to
 *              be called before any combination check can be done.
 * @param {object} playerCards contains the cards of the player
 * @param {object} communityCards contains the cards from table
 * @function sortArray sorts the newly created array from lowest value to highest
 *
 * @returns array of card objects sorted from lowest to highest value
 */
export const groupCards = (playerCards: ICard[], communityCards: ICard[]) => {
  if (!validateParams(playerCards) || !validateParams(communityCards))
    return false;

  const cards = [...playerCards, ...communityCards];
  return sortArray(cards, 'lowObject');
};

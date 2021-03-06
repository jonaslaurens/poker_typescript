import { ICard } from "../../types/types";

/**
 * @description counts the amount of cards
 * @param {object} cards contains all cards
 * @returns array which contains the total of each card occurring in the cards param
 */
export const countCards = (cards: ICard[]): number[] => {
  const counts: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  cards.forEach((card: ICard) => {
    if (card.value === 1) {
      return (counts[13] += 1);
    }
    counts[card.value - 1] += 1;
  });

  return counts;
};

import { Card } from '../../model/Card';

/**
 * @description counts the amount of cards
 * @param {object} cards contains all cards
 * @returns array which contains the total of each card occurring in the cards param
 */
export const cardCounts = (cards: Card[]): number[] => {
  const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  cards.forEach((card) => {
    if (card.value === 1) {
      return (counts[13] += 1);
    }
    counts[card.value - 1] += 1;
  });

  return counts;
};

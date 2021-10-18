import { findMax } from "./findMax";

export const isHighCard = (countedCards: number[]): number => {
  return findMax(countedCards, true);
};

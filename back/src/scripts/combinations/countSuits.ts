import { ICard } from "../../types/types";

/**
 * @description returns object with the amount a certain suit is counted inside the cards array
 */
export const countSuits = (cards: ICard[]): object => {
  // create object
  let counts: any = {};

  // create key value pairs determined by the suits contained in array
  for (let i = 0; i < cards.length; i++) {
    const currentSuit = cards[i].suit;
    counts[`${currentSuit}`] = 0;
  }

  // count suits inside cards array and add them to newly created object
  for (let i = 0; i < cards.length; i++) {
    const currentSuit = cards[i].suit;
    counts[currentSuit] += 1;
  }

  // returns object with key = suit and value = times suit is occurring in cards array
  return counts;
};

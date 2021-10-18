import { ICard } from "../../types/types";

/**
 * @description  create all different combinations possible with given cards
 * @returns
 */
export const createSet = function (cards: ICard[], groups: number) {
  // holds the result
  let result: any[] = [];

  // if the amount of groups is equal to the length of our cards we return our result
  if (groups === cards.length) {
    return [cards];
  }

  // one card in each group
  if (groups === 1) {
    return cards.map((card) => [card]);
  }

  for (let i = 0; i < cards.length; i++) {
    let head = cards.slice(i, i + 1);
    let tails = createSet(cards.slice(i + 1), groups - 1);
    tails.forEach((tail) => {
      result.push(head.concat(tail));
    });
  }

  return result;
};

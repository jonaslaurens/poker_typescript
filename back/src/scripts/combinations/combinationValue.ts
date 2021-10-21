import { ICard } from "../../types/types";

export const combinationValue = (cards: ICard[], primary: number) => {
  let str: number = 0;

  cards.forEach(card => {
    let value = card.value;
    let lowerValue = (value < 10 ? 0 : value) + value;

    str += lowerValue;
  });

  return primary * 10000000000 + str;
};

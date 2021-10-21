import { ICard, IResult } from "../../types/types";
import { createSet } from "../combinations/createSet";
import { calculate } from "./calculate";

export const checkCombination = (cards: ICard[]): IResult => {
  let result = {
    name: 'Nothing',
    value: 0
  };

  const sets = createSet(cards, 5);
  sets.forEach(set => {
    const calculatedResult = calculate(set);
    if (result.value < calculatedResult.value) {
      result = calculatedResult;
    }
  });

  return result;
};

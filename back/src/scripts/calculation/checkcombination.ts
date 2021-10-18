import { ICard } from "../../types/types";
import { createSet } from "../combinations/createSet";
import { calculate } from "./calculate";

export const checkCombination = (cards: ICard[]) => {
  let best = {
    name: 'Nothing',
    value: 0
  };

  const sets = createSet(cards, 5);
  sets.forEach(set => {
    const result = calculate(set);
    if (best.value < result.value) {
      best = result;
    }
  });

  return best;
};

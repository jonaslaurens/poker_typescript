import { findMax } from "./findMax";

export const isPair = (countedCards: number[], amount: number) => {
  // check for a pair of the amount given in param
  if (findMax(countedCards) === amount) {
    return true;
  }

  return false;
};

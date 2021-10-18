import { COMBINATIONS } from "../../constants/combinations";
import { ICard } from "../../types/types";
import { combinationValue } from "../combinations/combinationValue";
import { countCards } from "../combinations/countCards";
import { countSuits } from "../combinations/countSuits";
import { isFlush } from "../combinations/isFlush";
import { isFullHouse } from "../combinations/isFullHouse";
import { isHighCard } from "../combinations/isHighCard";
import { isPair } from "../combinations/isPair";
import { isRoyalFlush } from "../combinations/isRoyalFlush";
import { isStraight } from "../combinations/isStraight";
import { isStraightFlush } from "../combinations/isStraightFlush";
import { isTwoPair } from "../combinations/isTwoPair";

export const calculate = (cards: ICard[]) => {
  let result = {
    name: 'Nothing',
    value: 0,
  };

  const countedCards = countCards(cards);
  const countedSuits = countSuits(cards);

  if (isRoyalFlush(cards, countedCards, countedSuits)) {
    result.name = COMBINATIONS[0];
    result.value = combinationValue(cards, 9);
    return result;
  }

  if (isStraightFlush(cards, countedSuits)) {
    result.name = COMBINATIONS[1];
    result.value = combinationValue(cards, 8);
    return result;
  }

  if (isPair(countedCards, 4)) {
    result.name = COMBINATIONS[2];
    result.value = combinationValue(cards, 7);
    return result;
  }

  if (isFullHouse(countedCards)) {
    result.name = COMBINATIONS[3];
    result.value = combinationValue(cards, 6);
    return result;
  }

  if (isFlush(countedSuits)) {
    result.name = COMBINATIONS[4];
    result.value = combinationValue(cards, 5);
    return result;
  }

  if (isStraight(countedCards)) {
    result.name = COMBINATIONS[5];
    result.value = combinationValue(cards, 4);
    return result;
  }

  if (isPair(countedCards, 3)) {
    result.name = COMBINATIONS[6];
    result.value = combinationValue(cards, 3);
    return result;
  }

  if (isTwoPair(countedCards)) {
    result.name = COMBINATIONS[7];
    result.value = combinationValue(cards, 2);
    return result;
  }

  if (isPair(countedCards, 2)) {
    result.name = COMBINATIONS[8];
    result.value = combinationValue(cards, 1);
    return result;
  }

  if (isHighCard(countedCards)) {
    result.name = COMBINATIONS[9];
    result.value = combinationValue(cards, 0);
    return result;
  }

  return result;
};

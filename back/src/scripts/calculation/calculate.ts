import { COMBINATIONS } from "../../constants/combinations";
import { ICard, IResult } from "../../types/types";
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

export const calculate = (cards: ICard[]): IResult => {
  let result = {
    name: 'Nothing',
    value: 0,
  };

  const countedCards = countCards(cards);
  const countedSuits = countSuits(cards);

  // checks for royal flush
  if (isRoyalFlush(cards, countedCards, countedSuits)) {
    result.name = COMBINATIONS[0];
    result.value = combinationValue(cards, 9);
    console.log(result);
    return result;
  }

  // checks for straight flush
  if (isStraightFlush(cards, countedSuits)) {
    result.name = COMBINATIONS[1];
    result.value = combinationValue(cards, 8);
    console.log(result);
    return result;
  }

  // checks for quads
  if (isPair(countedCards, 4)) {
    result.name = COMBINATIONS[2];
    result.value = combinationValue(cards, 7);
    console.log(result);
    return result;
  }

  // checks for full house
  if (isFullHouse(countedCards)) {
    result.name = COMBINATIONS[3];
    result.value = combinationValue(cards, 6);
    console.log(result);
    return result;
  }

  // checks for flush
  if (isFlush(countedSuits)) {
    result.name = COMBINATIONS[4];
    result.value = combinationValue(cards, 5);
    console.log(result);
    return result;
  }

  // checks for straight
  if (isStraight(countedCards)) {
    result.name = COMBINATIONS[5];
    result.value = combinationValue(cards, 4);
    console.log(result);
    return result;
  }

  // checks for trips
  if (isPair(countedCards, 3)) {
    result.name = COMBINATIONS[6];
    result.value = combinationValue(cards, 3);
    console.log(result);
    return result;
  }

  // checks for two pair
  if (isTwoPair(countedCards)) {
    result.name = COMBINATIONS[7];
    result.value = combinationValue(cards, 2);
    console.log(result);
    return result;
  }

  // checks for one pair
  if (isPair(countedCards, 2)) {
    result.name = COMBINATIONS[8];
    result.value = combinationValue(cards, 1);
    console.log(result);
    return result;
  }

  // checks for highest card, if this stage is reached high card is the default return
  result.name = COMBINATIONS[9];
  result.value = combinationValue(cards, 0);
  return result;
};

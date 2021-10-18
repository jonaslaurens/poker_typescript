import { ICard } from "../../types/types";
import { countCards } from "./countCards";
import { isStraight } from "./isStraight";
import { sortArray } from "./sortArray";

export const  isStraightFlush = (cards: ICard[], countedSuits: object) => {
  // sort newly created object from high to low
  const sorted = sortArray(Object.values(countedSuits), 'high');

  // if the first spot in the array is not equal to 5
  // there is no flush and no point in looking further
  if (sorted[0] < 5) return false;

  // we got a flush, we need to know which suit has made the flush
  // create array of the object so we can loop through it
  const entries = Object.entries(countedSuits);

  // initialize an empty sting, will hold the flush suit
  let flushSuit = '';

  // find the flush suit based on the count of the entries array
  // if the value is equal to the first spot of the sorted array
  // we got our flushsuit
  for (const [suit, count] of entries) {
    if (count === sorted[0]) {
      flushSuit = suit;
    }
  }

  // filter the original cards so we only got an array of the cards that has scored a flush and count them
  const newCards = countCards(cards.filter(card => card.suit === flushSuit));

  // if the flush is also a straight, we hit a straightflush
  if (isStraight(newCards)) return true;

  // return false if there is not a straight flush
  return false;
};

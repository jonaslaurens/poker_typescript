import { sortArray } from "./sortArray";

/**
 * @description sort countedSuits based on values. If the first number is equal or greater than 5 we got a flush else there is no flush
 * @returns
 */
export const isFlush = (countedSuits: object) => {
  return sortArray(Object.values(countedSuits), 'high')[0] >= 5 ? true : false;
};

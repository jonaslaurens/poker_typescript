import { combinationValue } from "../scripts/combinations/combinationValue";
import {
  royalflush,
  straightflush,
  flush,
  quads,
  fullhouse,
  straight,
  trips,
  twopair,
  pair,
  highCard,
} from "./possibleCombos";

describe('Test values coming from combinationValue', () => {
  test('Royal Flush should be same as value', () => {

    const res = combinationValue(royalflush, 9);

    expect(res).toEqual(90000000100);
  });

  test('Straight Flush should be same as value', () => {

    const res = combinationValue(straightflush, 8);

    expect(res).toEqual(80000000090);
  });

  test('Quads should be same as value', () => {

    const res = combinationValue(quads, 7);

    expect(res).toEqual(70000000020);
  });

  test('Full House should be same as value', () => {

    const res = combinationValue(fullhouse, 6);

    expect(res).toEqual(60000000022);
  });

  test('Flush should be same as value', () => {

    const res = combinationValue(flush, 5);

    expect(res).toEqual(50000000046);
  });

  test('Straight should be same as value', () => {

    const res = combinationValue(straight, 4);

    expect(res).toEqual(40000000062);
  });

  test('Trips should be same as value', () => {

    const res = combinationValue(trips, 3);

    expect(res).toEqual(30000000026);
  });

  test('Two pair should be same as value', () => {

    const res = combinationValue(twopair, 2);

    expect(res).toEqual(20000000028);
  });

  test('Pair should be same as value', () => {

    const res = combinationValue(pair, 1);

    expect(res).toEqual(10000000050);
  });

  test('High card should be same as value', () => {

    const res = combinationValue(highCard, 0);

    expect(res).toEqual(55);
  });


  test('Pair should be not be same as value', () => {

    const res = combinationValue(pair, 1);

    expect(res).not.toEqual(987654321);
  });
});

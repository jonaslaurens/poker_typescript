import { combinationValue } from "../scripts/combinations/combinationValue";

// TODO: work on this
describe('Create Card', () => {
  test('Card should be 2 of Hearts', () => {


    const flush = [
      { value: 2, suit: 'Clubs' },
      { value: 4, suit: 'Clubs' },
      { value: 3, suit: 'Clubs' },
      { value: 2, suit: 'Clubs' },
      { value: 13, suit: 'Hearts' },
      { value: 4, suit: 'Clubs' },
      { value: 5, suit: 'Diamonds' },
    ];

    const res = combinationValue(cards, 9);

    console.log(res)

    expect(cards).toEqual(testCard);
  });

});

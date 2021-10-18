import { groupCards } from "../scripts/combinations/groupCards";

describe('Test if groupCards correctly handles different scenarios', () => {


  test('Result should be a array of all cards', () => {
    const testPlayer = {
      name: 'john',
      cards: [
        { value: 1, suit: 'Clubs' },
        { value: 2, suit: 'Clubs' },
      ],
    };

    const testCommunityCards = [
      { value: 3, suit: 'Clubs' },
      { value: 4, suit: 'Hearts' },
      { value: 10, suit: 'Hearts' },
      { value: 6, suit: 'Clubs' },
      { value: 8, suit: 'Diamonds' },
    ];

    const result = [
      { value: 1, suit: 'Clubs' },
      { value: 2, suit: 'Clubs' },
      { value: 3, suit: 'Clubs' },
      { value: 4, suit: 'Hearts' },
      { value: 6, suit: 'Clubs' },
      { value: 8, suit: 'Diamonds' },
      { value: 10, suit: 'Hearts' },
    ];

    expect(groupCards(testPlayer.cards, testCommunityCards)).toEqual(result);
  });

});

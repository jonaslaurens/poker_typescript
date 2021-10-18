export const isStraight = (countedCards: number[]) => {
  let counter = 0;

  const gotAce = countedCards[13] > 0 ? true : false;

  // if gotAce is true, check if we have a low ace straight or hight ace straight
  if (gotAce) {
    // check for low
    if (
      countedCards[1] > 0 &&
      countedCards[2] > 0 &&
      countedCards[3] > 0 &&
      countedCards[4] > 0
    )
      return true;

    // check for high
    if (
      countedCards[9] > 0 &&
      countedCards[10] > 0 &&
      countedCards[11] > 0 &&
      countedCards[12] > 0
    ) {
      return true;
    }
  }

  // check if we got a medior straight
  let mediorStraight = false;
  countedCards.map((card) => {
    if (card === 0) {
      counter = 0;
      return;
    }

    if (card > 0) {
      counter++;
    }

    if (counter >= 5) {
      mediorStraight = true;
      counter = 0;
      return;
    }
  });

  // if mediorStraight is true we got a straight between 2 and king without an ace
  if (mediorStraight) return true;

  // by default we return false.
  return false;
};

// handles the current decider. Will increment if previous made decision or
// back to 0 if everyone decided.
export const handleDecider = (decider: number, playerLength: number): number => {
  if (decider >= playerLength - 1) {
    return 0;
  }

  return ++decider;
};

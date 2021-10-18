export const findMax = (array: any[], options?: boolean | null): number => {
  let max: number = 0;

  for (let i = 0; i < array.length; i++) {
    if (!options) {
      array[i] > max ? (max = array[i]) : max;
    } else {
      array[i] > 0 ? (max = i + 1) : max;
    }
  }
  return max;
};

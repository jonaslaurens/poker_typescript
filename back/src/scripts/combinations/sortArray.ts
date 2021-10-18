/**
 * @description sort the given array, optional options can be given which results in a different result
 * @returns
 */
export const sortArray = (arr: any, options?: string) => {
  if (options === 'high') {
    return arr.sort((a: number, b: number) => b - a);
  }

  if (options === 'low') {
    return arr.sort((a: number, b: number) => a - b);
  }

  if (options === 'lowObject') {
    return arr.sort((a: any, b: any) => a.value - b.value);
  }

  if (options === 'highObject') {
    return arr.sort((a: any, b: any) => b.value - a.value);
  }

  return false;
};

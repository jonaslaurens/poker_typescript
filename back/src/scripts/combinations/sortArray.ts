export const sortArray = (arr: any[], options: string) => {
  if (options === 'high') {
    return arr.sort((a, b) => b - a);
  }

  if (options === 'low') {
    return arr.sort((a, b) => a - b);
  }

  if (options === 'lowObject') {
    return arr.sort((a, b) => a.value - b.value);
  }

  if (options === 'highObject') {
    return arr.sort((a, b) => b.value - a.value);
  }

  return false;
};
